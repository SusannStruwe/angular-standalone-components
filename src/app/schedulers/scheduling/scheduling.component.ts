import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Order, PlanningItem, PlanningState, TimeSpan } from '../planning-item';
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
  
  @Input() planningItems: PlanningItem[] = [];
  @Input() striped = true;

  timeSpan = TimeSpan.DAY; 
  buttons = [
    {text:TimeSpan.DAY},
    {text:TimeSpan.WEEK},
    {text:TimeSpan.MONTH}
  ];

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(){
    this.planningItems = this.getSampleData();
  }

  ngAfterViewChecked(){
    this.cdr.detectChanges();
  }

  //Click event from btn group
  clickedBtn(btn: any){
    this.timeSpan = btn.text as TimeSpan;
    this.cdr.detectChanges();
  }

  // Check if item is current day or hour
  isCurrent(item: string):boolean{
    if(this.timeSpan == TimeSpan.DAY){
      let current = new Date().getHours();
      return current.toString() +':00' == item;
    }else{
      let current = this.timeSpan == TimeSpan.WEEK ? moment().format('DD.MM'): moment().format('DD');
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

  planningItemClicked(item:PlanningItem){
    console.log(item);
  }

  getPlanningItemLeftPosition(startDate: Date):number{
    const cellWidth = this.getCellWidth();

    if(this.timeSpan == TimeSpan.DAY){
      const startHour = startDate.getHours();
      const startMinutes = startDate.getMinutes();
      return  Math.round(startHour * cellWidth + (startMinutes*cellWidth / 100));

    }else{
      const schedulerStart = this.timeSpan == TimeSpan.WEEK ? moment().startOf('week') : moment().startOf('month');
      const startDay = moment(startDate);
      const duration = moment.duration(moment(startDay).diff(moment(schedulerStart)));
      const startHour = startDate.getHours();
      const startMinutes = startDate.getMinutes();
      // 1 day -> 24 hours -> 1140 minutes
      console.log(Math.trunc(duration.asDays()) * cellWidth);
      return Math.trunc(Math.trunc(duration.asDays()) * cellWidth) +  Math.trunc(startHour * cellWidth / 24) + Math.trunc(startMinutes * cellWidth / 1140);
    } 
  }

  getPlanningItemWidth(startDate: Date, endDate: Date):number{
    const cellWidth = this.getCellWidth();
    const duration = moment.duration(moment(endDate).diff(moment(startDate)));
    const minuteDuration = duration.asMinutes();
    // day -> cell is 60min
    // week & month > cell is 24h -> 1.440min
    return Math.round((minuteDuration/(this.timeSpan == TimeSpan.DAY ? 60 : 1440)) * cellWidth);
  }

  getCellWidth():number{
    const backgroundEl = document.getElementsByClassName('background')[0];
    const cellWidth = backgroundEl.children[1].getClientRects()[0].width;
    return cellWidth;
  }

  getStateClass(order: Order):string{
    return `${order.state}`+ (this.striped? ' striped' : '');
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
       days.push(dateStart.format('DD.MM'))
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


  getSampleData():PlanningItem[]{
    const order1: Order = new Order('12233', moment().subtract(16, 'hours').toDate(), moment().subtract(9, 'hours').toDate(), PlanningState.STARTED);
    const order2: Order = new Order('44555', moment().subtract(8.9, 'hours').toDate(), moment().subtract(7, 'hours').toDate(), PlanningState.MAINTAIN);
    const order3: Order = new Order('66666', moment().subtract(6, 'hours').toDate(), moment().subtract(0, 'hours').toDate(), PlanningState.DISRUPTED);
    const order4: Order = new Order('4444', moment().subtract(17, 'hours').toDate(), moment().subtract(12, 'hours').toDate(), PlanningState.STARTED);
  
    const planningItem: PlanningItem = new PlanningItem(null, 'Maschine 1', [order1, order2, order3]);
    const planningItem2: PlanningItem = new PlanningItem(null, 'Maschine 2', [order1, order2, order3]);
    const planningItem3: PlanningItem = new PlanningItem(null, 'Maschine 3', [order4, order2, order3]);
    const planningItem4: PlanningItem = new PlanningItem(null, 'Maschine 4', [order1, order2, order3]);
    const planningItem5: PlanningItem = new PlanningItem(null, 'Maschine 5', [order1, order2, order3]);
    const planningItems: PlanningItem[] = [planningItem, planningItem2, planningItem3, planningItem4, planningItem5];

    return planningItems;
  }
}
