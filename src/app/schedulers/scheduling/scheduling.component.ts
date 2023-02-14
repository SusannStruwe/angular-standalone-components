import { CommonModule, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlanningState, SchedulerEvent, SchedulerRow, TimeSpan } from '../scheduler-model';
import * as moment from 'moment';
import { BtnGoupComponent } from 'src/app/buttons/btn-group/btn-group.component';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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

  filteredSchedulerRows: SchedulerRow[] = [];

  startDate: Date = moment().startOf('day').toDate();
  endDate: Date = moment().endOf('day').toDate();

  timeSpan = TimeSpan.DAY; 
  buttons = [
    {text:"Tag", value: TimeSpan.DAY},
    {text:"Woche", value: TimeSpan.WEEK},
    {text:"Monat", value: TimeSpan.MONTH}
  ];

  faArrowLeft = faChevronLeft;
  faArrowRight = faChevronRight;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(){
    this.schedulerRows = this.getSampleData();
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
    this.changeTimeSpan(btn.value);
    this.cdr.detectChanges();
  }

  changeTimeSpan(text: string):void{
    this.timeSpan = text as TimeSpan;
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
  isCurrent(item: string):boolean{
    // add date 
    let current = new Date();
    if(this.timeSpan == TimeSpan.DAY){
      return this.leadingZero(current.getHours()) +':00' == item && moment(this.startDate).isSame(current, 'day');
    }else{
      let currentFormatted = moment().format(WEEK_DAY_FORMAT);
      return currentFormatted.toString() == item && moment(current).isSameOrBefore(this.endDate) && moment(current).isSameOrAfter(this.startDate);
    }
  }

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

  schedulerEventClicked(item:SchedulerEvent){
    console.log(item);
  }

  getSchedulerEventLeftPosition(eventStartDate: Date):number{
    const cellWidth = this.getCellWidth();
    if(moment(eventStartDate).isSameOrAfter(this.startDate)){
      const duration = moment.duration(moment(eventStartDate).diff(moment(this.startDate)));
      return  Math.trunc(duration.asMinutes() * cellWidth / (this.timeSpan == TimeSpan.DAY ? 60 : 1440));
    }else{
      return 0;
    }
  }

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

  isBetween(event: SchedulerEvent):boolean{
    let case1 = moment(event.startDate).isBefore(this.startDate) && moment(event.endDate).isAfter(this.endDate);
    let case2 = moment(event.startDate).isAfter(this.startDate) && moment(event.startDate).isBefore(this.endDate) && moment(event.endDate).isAfter(this.endDate);
    let case3 = moment(event.startDate).isBefore(this.startDate) && moment(event.endDate).isAfter(this.startDate) && moment(event.endDate).isBefore(this.endDate);
    let case4 = moment(event.startDate).isAfter(this.startDate) && moment(event.endDate).isBefore(this.endDate);

    return case1 || case2 || case3 || case4;
  }

  getCellWidth():number{
    const backgroundEl = document.getElementsByClassName('background')[0];
    const cellWidth = backgroundEl.children[1].getClientRects()[0].width;
    return cellWidth;
  }

  getStateClass(schedulerEvent: SchedulerEvent):string{
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
    const header = [];
    for (let i = 0; i < 24; i ++) {
      header.push(`${this.leadingZero(i % 24)}:00`);
    }
    return header;
  }

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

  leadingZero(num: number): string {
    if (num < 10) return `0${num}`;
    else return `${num}`;
  }


  getSampleData():SchedulerRow[]{
    const schedulerEvent1: SchedulerEvent = new SchedulerEvent('12233', null, moment().subtract(3, 'days').set({ hours: 9, minutes: 0 }).toDate(), moment().set({ hours: 9, minutes: 0 }).toDate(), PlanningState.STARTED + ' striped');
    const schedulerEvent2: SchedulerEvent = new SchedulerEvent('44555', null, moment().add(1, 'days').set({ hours: 9, minutes: 0 }).toDate(), moment().add(2, 'days').set({ hours: 17, minutes: 0 }).toDate(), PlanningState.MAINTAIN + ' striped');
    const schedulerRow: SchedulerRow = new SchedulerRow('Maschine 1', null, [schedulerEvent1, schedulerEvent2]);

    const schedulerEvent3: SchedulerEvent = new SchedulerEvent('66666', null, moment().subtract(2, 'days').set({ hours: 9, minutes: 0 }).toDate(), moment().subtract(1, 'days').set({ hours: 11, minutes: 0 }).toDate(), PlanningState.DISRUPTED + ' striped');
    const schedulerEvent4: SchedulerEvent = new SchedulerEvent('4444',  null, moment().set({ hours: 9, minutes: 0 }).toDate(), moment().add(3, 'days').set({ hours: 16, minutes: 0 }).toDate(), PlanningState.STARTED + ' striped');
    const schedulerRow2: SchedulerRow = new SchedulerRow('Maschine 2', null, [schedulerEvent3, schedulerEvent4]);

    const schedulerEvent5: SchedulerEvent = new SchedulerEvent('12233', null, moment().subtract(1, 'days').set({ hours: 9, minutes: 0 }).toDate(), moment().set({ hours: 8, minutes: 0 }).toDate(), PlanningState.STARTED);
    const schedulerEvent6: SchedulerEvent = new SchedulerEvent('44555', null, moment().set({ hours: 9, minutes: 0 }).toDate(), moment().add(5, 'days').set({ hours: 17, minutes: 0 }).toDate(), PlanningState.MAINTAIN);
    const schedulerRow3: SchedulerRow = new SchedulerRow('Maschine 3', null, [schedulerEvent5, schedulerEvent6]);

    const schedulerEvent7: SchedulerEvent = new SchedulerEvent('44555', null,moment().subtract(1, 'days').set({ hours: 9, minutes: 0 }).toDate(), moment().add(1, 'days').set({ hours: 17, minutes: 0 }).toDate(), PlanningState.STARTED);
    const schedulerRow4: SchedulerRow = new SchedulerRow('Maschine 4', null, [schedulerEvent7]);

    const schedulerRows: SchedulerRow[] = [schedulerRow, schedulerRow2, schedulerRow3, schedulerRow4];

    return schedulerRows;
  }
}
