import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PlanningState, SchedulerEvent, SchedulerRow, TimeSpan } from '../scheduler-model';
import * as moment from 'moment';
import { BtnGoupComponent } from 'src/app/buttons/btn-group/btn-group.component';


@Component({
  selector: 'scheduling-component',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule, BtnGoupComponent],
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
    {text:TimeSpan.DAY},
    {text:TimeSpan.WEEK},
    {text:TimeSpan.MONTH}
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(){
    this.schedulerRows = this.getSampleData();
    this.filteredSchedulerRows = Object.assign([], this.schedulerRows); 
    this.filteredSchedulerRows.forEach(item => {
        item.schedulerEvents = item.schedulerEvents.filter(event=>moment(event.endDate).isAfter(this.startDate));
      }
    );
  }

  ngAfterViewChecked(){
    this.cdr.detectChanges();
  }

  //Click event from btn group
  clickedBtn(btn: any){
    this.updateTimeSpan(btn.text);
    this.cdr.detectChanges();
  }

  updateTimeSpan(text: string):void{
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
        this.startDate = moment().startOf('week').toDate();
        this.endDate = moment().endOf('week').toDate();
        break;
    }
  }

  // Check if item is current day or hour
  isCurrent(item: string):boolean{
    if(this.timeSpan == TimeSpan.DAY){
      let current = new Date().getHours();
      return this.leadingZero(current) +':00' == item;
    }else{
      let current = this.timeSpan == TimeSpan.WEEK ? moment().format('DD'): moment().format('DD');
      return current.toString() == item;
    }
  }

  getColumns() {
    let columns = [];

    switch(this.timeSpan){
      case  TimeSpan.MONTH: columns = this.getDays();
        break;
      case  TimeSpan.DAY: columns = this.getHours();
        break;
      case  TimeSpan.WEEK: columns = this.getWeekDays();
        break;
    }
    return columns;
  }

  schedulerEventClicked(item:SchedulerEvent){
    console.log(item);
  }

  getSchedulerEventLeftPosition(eventStartDate: Date):number{
    const cellWidth = this.getCellWidth();
    if(moment(eventStartDate).isAfter(this.startDate)){
      const duration = moment.duration(moment(eventStartDate).diff(moment(this.startDate)));
      return  Math.trunc(duration.asMinutes() * cellWidth / (this.timeSpan == TimeSpan.DAY ? 60 : 1440));
    }else{
      return 0;
    }
  }


  getSchedulerEventWidthPosition(startDate: Date, endDate: Date):number{
    const cellWidth = this.getCellWidth();
    let duration: moment.Duration;
    if(moment(startDate).isBefore(this.startDate)){
      duration = moment.duration(moment(endDate).diff(moment(this.startDate)));
    }else{
      duration = moment.duration(moment(endDate).diff(moment(startDate)));
    }
    return Math.trunc((duration.asMinutes() * cellWidth / (this.timeSpan == TimeSpan.DAY ? 60 : 1440)));
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

  // Generates array of days from current month
  getDays():string[]{
    const days = [];
    const dateStart = moment().startOf('month');
    const dateEnd = moment().endOf('month');

    while (dateStart.isBefore(dateEnd)) {
       days.push(dateStart.format('DD'))
       dateStart.add(1, 'days')
    }
    return days;
  }

  // Generates array of week day from current week
  getWeekDays():string[]{
    const days = [];
    const dateStart = moment().startOf('week');
    const dateEnd = moment().endOf('week');

    while (dateStart.isBefore(dateEnd)) {
       days.push(dateStart.format('DD'))
       dateStart.add(1, 'days')
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

  leadingZero(num: number): string {
    if (num < 10) return `0${num}`;
    else return `${num}`;
  }


  getSampleData():SchedulerRow[]{
       /* const schedulerEvent1: SchedulerEvent = new SchedulerEvent('12233', null, moment().subtract(1, 'hours').toDate(), moment().subtract(9, 'hours').toDate(), PlanningState.STARTED + ' striped');
    const schedulerEvent2: SchedulerEvent = new SchedulerEvent('44555', null, moment().subtract(8.9, 'hours').toDate(), moment().subtract(7, 'hours').toDate(), PlanningState.MAINTAIN);
    const schedulerEvent3: SchedulerEvent = new SchedulerEvent('66666', null, moment().subtract(6, 'hours').toDate(), moment().subtract(5, 'hours').toDate(), PlanningState.DISRUPTED);
    const schedulerEvent4: SchedulerEvent = new SchedulerEvent('4444',  null,moment().subtract(17, 'hours').toDate(), moment().subtract(12, 'hours').toDate(), PlanningState.STARTED);
  */


    const schedulerEvent1: SchedulerEvent = new SchedulerEvent('12233', null, moment('2023-02-13 09:00:00').toDate(), moment('2023-02-14 08:00:00').toDate(), PlanningState.STARTED + ' striped');
    const schedulerEvent2: SchedulerEvent = new SchedulerEvent('44555', null, moment('2023-02-13 09:00:00').toDate(), moment('2023-02-13 17:00:00').toDate(), PlanningState.MAINTAIN);
    const schedulerRow: SchedulerRow = new SchedulerRow('Maschine 1', null, [schedulerEvent1, schedulerEvent2]);

    const schedulerEvent3: SchedulerEvent = new SchedulerEvent('66666', null, moment('2023-02-13 09:00:00').toDate(), moment('2023-02-13 11:00:00').toDate(), PlanningState.DISRUPTED);
    const schedulerEvent4: SchedulerEvent = new SchedulerEvent('4444',  null,moment('2023-02-14 09:00:00').toDate(), moment('2023-02-14 16:00:00').toDate(), PlanningState.STARTED);
    const schedulerRow2: SchedulerRow = new SchedulerRow('Maschine 2', null, [schedulerEvent3, schedulerEvent4]);

    const schedulerEvent5: SchedulerEvent = new SchedulerEvent('12233', null, moment('2023-02-13 09:00:00').toDate(), moment('2023-02-14 08:00:00').toDate(), PlanningState.STARTED + ' striped');
    const schedulerEvent6: SchedulerEvent = new SchedulerEvent('44555', null, moment('2023-02-14 09:00:00').toDate(), moment('2023-02-15 17:00:00').toDate(), PlanningState.MAINTAIN);
    const schedulerRow3: SchedulerRow = new SchedulerRow('Maschine 3', null, [schedulerEvent5, schedulerEvent6]);

    const schedulerEvent7: SchedulerEvent = new SchedulerEvent('44555', null, moment('2023-02-13 09:00:00').toDate(), moment('2023-02-15 17:00:00').toDate(), PlanningState.STARTED + ' striped');
    const schedulerRow4: SchedulerRow = new SchedulerRow('Maschine 4', null, [schedulerEvent7]);

    const schedulerRows: SchedulerRow[] = [schedulerRow, schedulerRow2, schedulerRow3, schedulerRow4];

    return schedulerRows;
  }
}
