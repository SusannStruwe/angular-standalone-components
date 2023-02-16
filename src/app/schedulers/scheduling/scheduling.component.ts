import { CommonModule, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SchedulerEvent, SchedulerRow, TimeSpan } from '../scheduler-model';
import * as moment from 'moment';
import { BtnGoupComponent } from 'src/app/buttons/btn-group/btn-group.component';
import { faChevronLeft, faChevronRight, faRotate } from '@fortawesome/free-solid-svg-icons';
import { LOCALE_ID } from '@angular/core';


registerLocaleData(localeDe);
const WEEK_DAY_FORMAT = 'DD';

@Component({
  selector: 'scheduling-component',
  standalone: true,
  providers:[{ provide: LOCALE_ID, useValue: 'de-DE'}],
  imports:[
    CommonModule, 
    FontAwesomeModule, 
    BtnGoupComponent
  ],
  templateUrl: './scheduling.component.html',
  styleUrls: ['./scheduling.component.scss']
})
export class SchedulingComponent {
  
  @Input() schedulerRows: SchedulerRow[] = [];
  @Input() timeSpan: TimeSpan = TimeSpan.DAY;
  @Output() schedulerEventSelected = new EventEmitter<SchedulerEvent>();

  @ViewChild('cellWidth') cellWidth?: ElementRef; 

  buttons = [
    {text:"Tag", value: TimeSpan.DAY},
    {text:"Woche", value: TimeSpan.WEEK},
    {text:"Monat", value: TimeSpan.MONTH}
  ];
  activeTimeSpanBtn:string = "";
  startDate: Date = moment().startOf('day').toDate();
  endDate: Date = moment().endOf('day').toDate();
  faArrowLeft = faChevronLeft;
  faArrowRight = faChevronRight;
  faRefresh = faRotate;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(){
    this.setTimeSpan(this.timeSpan);
    this.activeTimeSpanBtn = this.buttons.filter((btn:any) => btn.value === this.timeSpan)[0].text;
  }

  ngAfterViewChecked(){
    this.cdr.detectChanges();
  }

  next():void{
    switch(this.timeSpan){
      case  TimeSpan.MONTH: 
        this.startDate = moment(this.startDate).add(1, 'month').startOf('month').toDate();
        this.endDate = moment(this.endDate).add(1, 'month').endOf('month').toDate();
        break;
      case  TimeSpan.DAY: 
        this.startDate = moment(this.startDate).add(1, 'day').startOf('day').toDate();
        this.endDate = moment(this.endDate).add(1, 'day').endOf('day').toDate();
        break;
      case  TimeSpan.WEEK: 
        this.startDate = moment(this.startDate).add(1, 'week').startOf('isoWeek').toDate();
        this.endDate = moment(this.endDate).add(1, 'week').endOf('isoWeek').toDate();
        break;
    }
    this.cdr.detectChanges();
  }

  previous():void{
    switch(this.timeSpan){
      case  TimeSpan.MONTH:
        this.startDate = moment(this.startDate).subtract(1, 'month').startOf('month').toDate();
        this.endDate = moment(this.endDate).subtract(1, 'month').endOf('month').toDate();
        break;
      case  TimeSpan.DAY: 
        this.startDate = moment(this.startDate).subtract(1, 'day').startOf('day').toDate();
        this.endDate = moment(this.endDate).subtract(1, 'day').endOf('day').toDate();
        break;
      case  TimeSpan.WEEK: 
        this.startDate = moment(this.startDate).subtract(1, 'week').startOf('isoWeek').toDate();
        this.endDate = moment(this.endDate).subtract(1, 'week').endOf('isoWeek').toDate();
        break;
    }
    this.cdr.detectChanges();
  }

  //Click event from btn group
  timeSpanBtnClicked(btn: any){
    this.setTimeSpan(btn.value as TimeSpan);
    this.cdr.detectChanges();
  }

  //Click event from scheduler event
  schedulerEventClicked(item:SchedulerEvent){
    this.schedulerEventSelected.emit(item);
  }

  //Sets new timeSpan
  setTimeSpan(timeSpan: TimeSpan):void{
    this.timeSpan = timeSpan;
    switch(this.timeSpan){
      case  TimeSpan.MONTH: 
        this.startDate = moment().startOf('month').toDate();
        this.endDate = moment().endOf('month').toDate();
        break;
      case  TimeSpan.DAY: 
        this.startDate = moment().startOf('day').toDate();
        this.endDate = moment().endOf('day').toDate();
        break;
      case  TimeSpan.WEEK: 
        this.startDate = moment().startOf('isoWeek').toDate();
        this.endDate = moment().endOf('isoWeek').toDate();
        break;
    }
  }

  // Check if item is current day or hour
  isCurrent(item: string | Date):boolean{
    let current = new Date();

    if(item instanceof Date){
      return moment(item).isSame(current, 'day');

    }else{
      if(this.timeSpan == TimeSpan.DAY){
        return this.leadingZero(current.getHours()) +':00' == item && moment(this.startDate).isSame(current, 'day');
      }else{
        let currentFormatted = moment().format(WEEK_DAY_FORMAT);
        return currentFormatted.toString() == item && moment(current).isSameOrBefore(this.endDate) && moment(current).isSameOrAfter(this.startDate);
      }
    }
  }

  //Gets cell columns
  getColumns() {
    let columns = [];
    switch(this.timeSpan){
      case  TimeSpan.MONTH: columns = this.getDays();
        break;
      case  TimeSpan.DAY: columns = this.getHours();
        break;
      case  TimeSpan.WEEK: columns = this.getDays();
        break;
    }
    return columns;
  }

  //Calculates scheduler event left position
  getSchedulerEventLeftPosition(eventStartDate: Date):number{
    const cellWidth = this.getCellWidth();
    if(moment(eventStartDate).isSameOrAfter(this.startDate)){
      const duration = moment.duration(moment(eventStartDate).diff(moment(this.startDate)));
      return  Math.trunc(duration.asMinutes() * cellWidth / (this.timeSpan == TimeSpan.DAY ? 60 : 1440));
    }else{
      return 0;
    }
  }

  //Calculates scheduler event width
  getSchedulerEventWidthPosition(event: SchedulerEvent):number{
    if(this.isBetween(event)){
      const cellWidth = this.getCellWidth();
      let duration: moment.Duration;
      if(moment(event.startDate).isBefore(this.startDate)){
        duration = moment.duration(moment(event.endDate).diff(moment(this.startDate)));
      }else{
        duration = moment.duration(moment(event.endDate).diff(moment(event.startDate)));
      }
      return Math.trunc((duration.asMinutes() * cellWidth / (this.timeSpan == TimeSpan.DAY ? 60 : 1440)));
    }else{
      return 0;
    }
  }

  // Checks scheduler event should be shown
  isBetween(event: SchedulerEvent):boolean{
    let case1 = moment(event.startDate).isBefore(this.startDate) && moment(event.endDate).isAfter(this.endDate);
    let case2 = moment(event.startDate).isAfter(this.startDate) && moment(event.startDate).isBefore(this.endDate) && moment(event.endDate).isAfter(this.endDate);
    let case3 = moment(event.startDate).isBefore(this.startDate) && moment(event.endDate).isAfter(this.startDate) && moment(event.endDate).isBefore(this.endDate);
    let case4 = moment(event.startDate).isAfter(this.startDate) && moment(event.endDate).isBefore(this.endDate);
    return case1 || case2 || case3 || case4;
  }

  //Get width from cell
  getCellWidth():number{
    if(this.cellWidth){
      return this.cellWidth.nativeElement.getBoundingClientRect().width;
    }else{
      return 0;
    }
  }

  //Get class style as string
  getClassStyle(schedulerEvent: SchedulerEvent):string{
    let startedPreviousDay = '';
    if(this.getSchedulerEventLeftPosition(schedulerEvent.startDate) === 0){
      startedPreviousDay = ' no-left-radius';
    }
    return `${schedulerEvent.classStyle}` + startedPreviousDay;
  }

  // Generates array of days from current month or week
  getDays(): string[]{
    const days = [];
    const dateStart = moment(this.startDate).startOf(this.timeSpan === TimeSpan.WEEK ? 'isoWeek' : this.timeSpan);
    const dateEnd = moment(this.endDate).endOf(this.timeSpan === TimeSpan.WEEK ? 'isoWeek' : this.timeSpan);

    while (dateStart.isBefore(dateEnd)) {
       days.push(dateStart.format(WEEK_DAY_FORMAT));
       dateStart.add(1, 'days');
    }
    return days;
  }

  // Generates array of hours from current day
  getHours(): string[] {
    const header: string[] = [];
    for (let i = 0; i < 24; i ++) {
      header.push(`${this.leadingZero(i % 24)}:00`);
    }
    return header;
  }

  // Generates array of iso week days 
  getWeekDays(): Date[]{
    const days = [];
    const dateStart = moment(this.startDate).startOf(this.timeSpan === TimeSpan.WEEK ? 'isoWeek' : this.timeSpan);
    const dateEnd = moment(this.endDate).endOf(this.timeSpan === TimeSpan.WEEK ? 'isoWeek' : this.timeSpan);

    while (dateStart.isBefore(dateEnd)) {
      days.push(dateStart.toDate());
      dateStart.add(1, 'days');
   }
    return days;
  }

  //add leading zero to single digit numbers 
  leadingZero(num: number): string {
    if (num < 10) return `0${num}`;
    else return `${num}`;
  }
}
