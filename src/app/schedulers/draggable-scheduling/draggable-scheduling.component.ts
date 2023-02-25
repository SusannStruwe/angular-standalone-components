import { CommonModule, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SchedulerEvent, SchedulerRow, TimeSpan } from '../scheduler-model';
import * as moment from 'moment';
import { BtnGoupComponent } from 'src/app/buttons/btn-group/btn-group.component';
import { faChevronLeft, faChevronRight, faRotate } from '@fortawesome/free-solid-svg-icons';
import { LOCALE_ID } from '@angular/core';
import { CdkDragEnd, DragDropModule } from '@angular/cdk/drag-drop';


registerLocaleData(localeDe);
const WEEK_DAY_FORMAT = 'DD';

@Component({
  selector: 'draggable-scheduling-component',
  standalone: true,
  providers:[{ provide: LOCALE_ID, useValue: 'de-DE'}],
  imports:[
    CommonModule, 
    FontAwesomeModule, 
    BtnGoupComponent,
    DragDropModule
  ],
  templateUrl: './draggable-scheduling.component.html',
  styleUrls: ['./draggable-scheduling.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DraggableSchedulingComponent {
  
  @Input() schedulerRows: SchedulerRow[] = [];
  @Input() timeSpan: TimeSpan = TimeSpan.DAY;
  @Output() schedulerEventSelected = new EventEmitter<SchedulerEvent>();

  @ViewChild('cell') cellRef?: ElementRef; 
  @ViewChild('contentWidth') contentWidthRef?: ElementRef;

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
  cellWidth: number = 0;
  cellHeight:number = 0;
  contentWidth: number = 0;

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(){
    this.setTimeSpan(this.timeSpan);
    this.activeTimeSpanBtn = this.buttons.filter((btn:any) => btn.value === this.timeSpan)[0].text;
  }

  @HostListener('window:resize', ['$event'])
  ngAfterViewChecked(){
    if(this.cellRef){
      this.cellWidth =  this.cellRef.nativeElement.getBoundingClientRect().width;
      this.cellHeight = this.cellRef.nativeElement.getBoundingClientRect().height;
    }
    if(this.contentWidthRef){
      this.contentWidth = this.contentWidthRef.nativeElement.getBoundingClientRect().width;
    }
    this.cdr.detectChanges();
  }

  onDropEnd(event: CdkDragEnd<any>): void {
    let rowIndex:number = Number(event.source.element.nativeElement.getAttribute('rowIndex'));
    let columnIndex:number = Number(event.source.element.nativeElement.getAttribute('columnIndex'));
    let droppedSchedulerEvent = this.schedulerRows[rowIndex].schedulerEvents[columnIndex];
    let changedRow = Math.round(event.distance.y / this.cellHeight) + rowIndex;
    let addedMinutes = event.distance.x * (this.timeSpan == TimeSpan.DAY ? 60 : 1440) / this.cellWidth;

    if(changedRow <= this.schedulerRows.length && changedRow >= 0){
      this.updateSchedulerRow(changedRow, rowIndex, droppedSchedulerEvent, addedMinutes);
    }
    event.source._dragRef.reset();
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

  /*
  Click event from btn group
  */
  timeSpanBtnClicked(btn: any){
    this.setTimeSpan(btn.value as TimeSpan);
    this.cdr.detectChanges();
  }

  /*
  Click event from scheduler event
  */
  schedulerEventClicked(item:SchedulerEvent){
    this.schedulerEventSelected.emit(item);
  }

  /*
  Sets new timeSpan
  */
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

  /*
  Check if item is current day or hour
  */
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

  /*
  Gets cell columns
  */
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

  /*
  Updated row after drag & drop
  */
  updateSchedulerRow(rowIndexAfter: number, rowIndexBefore:number, schedulerEvent: SchedulerEvent, minutes:number ):void{
    //update schedulerEvent startDate
    if(minutes < 0){
      schedulerEvent.startDate = moment(schedulerEvent.startDate).subtract((-1*minutes), 'minutes').toDate();
      schedulerEvent.endDate = moment(schedulerEvent.endDate).subtract((-1*minutes), 'minutes').toDate();
    }else{
      schedulerEvent.startDate = moment(schedulerEvent.startDate).add(minutes, 'minutes').toDate();
      schedulerEvent.endDate = moment(schedulerEvent.endDate).add(minutes, 'minutes').toDate();
    }
    //update schedulerRows schedulerEvent
    const eventsCopy:SchedulerEvent[] = JSON.parse(JSON.stringify(this.schedulerRows[rowIndexBefore].schedulerEvents));

    //update schedulerRows schedulerEvent, remove and add
    this.schedulerRows[rowIndexBefore].schedulerEvents = eventsCopy.filter(item => item.id !== schedulerEvent.id);
    this.schedulerRows[rowIndexAfter].schedulerEvents.push(schedulerEvent);
  }

  /*
  Get foreground styles
  */
  getStyle(event: SchedulerEvent):any{
    if(this.isBetween(event)){
      let durationWidth = moment.duration(moment(event.endDate).diff(moment(event.startDate)));
      let width = Math.trunc((durationWidth.asMinutes() * this.cellWidth / (this.timeSpan == TimeSpan.DAY ? 60 : 1440)));
      let left: number | null = null;
      let right:number | null = null;
  
      if(this.isInsideTimeSpan(event)){
        const durationRight = moment.duration(moment(this.endDate).diff(moment(event.endDate)));
        right =  Math.trunc(durationRight.asMinutes() * this.cellWidth / (this.timeSpan == TimeSpan.DAY ? 60 : 1440));
        const durationLeft = moment.duration(moment(event.startDate).diff(moment(this.startDate)));
        left =  Math.trunc(durationLeft.asMinutes() * this.cellWidth / (this.timeSpan == TimeSpan.DAY ? 60 : 1440));
      }
      if(this.isOverlappingLeft(event)){
        const durationRight = moment.duration(moment(this.endDate).diff(moment(event.endDate)));
        right =  Math.trunc(durationRight.asMinutes() * this.cellWidth / (this.timeSpan == TimeSpan.DAY ? 60 : 1440));
      }
      if(this.isOverlappingRight(event)){
        const durationLeft = moment.duration(moment(event.startDate).diff(moment(this.startDate)));
        left =  Math.trunc(durationLeft.asMinutes() * this.cellWidth / (this.timeSpan == TimeSpan.DAY ? 60 : 1440));
      }
      if(this.isOverlappingLeftAndRight(event)){
        const durationRight = moment.duration(moment(event.endDate).diff(moment(this.endDate)));
        right =  (-1 * Math.trunc(durationRight.asMinutes() * this.cellWidth / (this.timeSpan == TimeSpan.DAY ? 60 : 1440)));
        const durationLeft = moment.duration(moment(this.startDate).diff(moment(event.startDate)));
        left =  (-1 * Math.trunc(durationLeft.asMinutes() * this.cellWidth / (this.timeSpan == TimeSpan.DAY ? 60 : 1440)));
      }
 
      return {
        left: left ? left + 'px' : 'auto',
        right: right ? right + 'px': 'auto',
        width: width + 'px'
      };

    }else{
      return {}
    }
  }
  
  /*
  Checks scheduler event should be shown
  */
  isBetween(event: SchedulerEvent):boolean{
    let case1 = this.isOverlappingLeftAndRight(event);
    let case2 = this.isOverlappingRight(event);
    let case3 = this.isOverlappingLeft(event);
    let case4 = this.isInsideTimeSpan(event);
    return case1 || case2 || case3 || case4;
  }

  isInsideTimeSpan(event: SchedulerEvent):boolean{
    return moment(event.startDate).isAfter(this.startDate) && moment(event.endDate).isBefore(this.endDate);
  }
  isOverlappingLeftAndRight(event: SchedulerEvent):boolean{
    return moment(event.startDate).isBefore(this.startDate) && moment(event.endDate).isAfter(this.endDate);
  }
  isOverlappingRight(event: SchedulerEvent):boolean{
    return moment(event.startDate).isAfter(this.startDate) && moment(event.startDate).isBefore(this.endDate) && moment(event.endDate).isAfter(this.endDate);
  }
  isOverlappingLeft(event: SchedulerEvent):boolean{
    return moment(event.startDate).isBefore(this.startDate) && moment(event.endDate).isAfter(this.startDate) && moment(event.endDate).isBefore(this.endDate);
  }

  /*
  Get class style as string
  */
  getClassStyle(schedulerEvent: SchedulerEvent):string{
    return `${schedulerEvent.classStyle}`;
  }

  /*
  Generates array of days from current month or week
  */
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

  /*
  Generates array of hours from current day
  */
  getHours(): string[] {
    const header: string[] = [];
    for (let i = 0; i < 24; i ++) {
      //header.push(`${this.leadingZero(i % 24)}:00`);
      if(this.cellWidth < 35.5){
        header.push(`${this.leadingZero(i % 24)}`);
      }else{
        header.push(`${this.leadingZero(i % 24)}:00`);
      }
    }
    return header;
  }

  /*
  Generates array of iso week days 
  */
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

  /*
  Adds leading zero to single digit numbers 
  */
  leadingZero(num: number): string {
    if (num < 10) return `0${num}`;
    else return `${num}`;
  }
}
