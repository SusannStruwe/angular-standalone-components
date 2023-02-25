
import { Component } from '@angular/core';
import * as moment from 'moment';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { DraggableSchedulingComponent } from './draggable-scheduling/draggable-scheduling.component';
import { PlanningState, SchedulerEvent, SchedulerRow, TimeSpan } from './scheduler-model';
import { SchedulingComponent } from './scheduling/scheduling.component';


@Component({
  selector: 'schedulers-component',
  standalone: true,
  imports:[
    ThemeChangerComponent,
    SchedulingComponent,
    DraggableSchedulingComponent
  ],
  templateUrl: './schedulers.component.html',
  styleUrls: ['./schedulers.component.scss']
})
export class SchedulersComponent {

  schedulerRows: SchedulerRow[] = [];
  timeSpanWeek: TimeSpan = TimeSpan.WEEK;

  schedulerRows2: SchedulerRow[] = [];
  timeSpanMonth: TimeSpan = TimeSpan.MONTH;

  selectedSchedulerEvent1: SchedulerEvent | null = null;
  selectedSchedulerEvent2: SchedulerEvent | null = null;
  selectedSchedulerEvent3: SchedulerEvent | null = null;

  constructor() { }

  ngOnInit(){
    this.schedulerRows = this.getSampleData(false);
    this.schedulerRows2 = this.getSampleData(true);
  }

  schedulerEventSelected1(item: SchedulerEvent):void{
    this.selectedSchedulerEvent1 = item;
  }

  schedulerEventSelected2(item: SchedulerEvent):void{
    this.selectedSchedulerEvent2 = item;
  }

  schedulerEventSelected3(item: SchedulerEvent):void{
    this.selectedSchedulerEvent3 = item;
  }


  getSampleData(striped: boolean):SchedulerRow[]{
    const schedulerRow: SchedulerRow = new SchedulerRow(
      'Ressource 1', 
      null, 
      [ new SchedulerEvent('1','12233', null, moment().subtract(3, 'days').set({ hours: 9, minutes: 0 }).toDate(), moment().set({ hours: 9, minutes: 0 }).toDate(), PlanningState.STARTED + (striped ? ' striped': '')),
        new SchedulerEvent('2','44555', null, moment().add(1, 'days').set({ hours: 9, minutes: 0 }).toDate(), moment().add(2, 'days').set({ hours: 17, minutes: 0 }).toDate(), PlanningState.MAINTAIN + (striped ? ' striped': ''))
      ]);
    const schedulerRow2: SchedulerRow = new SchedulerRow(
      'Ressource 2', 
      null, 
      [new SchedulerEvent('3','66666', null, moment().subtract(2, 'days').set({ hours: 9, minutes: 0 }).toDate(), moment().subtract(1, 'days').set({ hours: 11, minutes: 0 }).toDate(), PlanningState.DISRUPTED + (striped ? ' striped': '')), 
      new SchedulerEvent('4', '4444',  null, moment().set({ hours: 9, minutes: 0 }).toDate(), moment().add(3, 'days').set({ hours: 16, minutes: 0 }).toDate(), PlanningState.STARTED + (striped ? ' striped': ''))
      ]);
    const schedulerRow3: SchedulerRow = new SchedulerRow(
      'Ressource 3', 
      null, 
      [new SchedulerEvent('5','12233', null, moment().subtract(1, 'days').set({ hours: 9, minutes: 0 }).toDate(), moment().set({ hours: 8, minutes: 0 }).toDate(), PlanningState.STARTED + (striped ? ' striped': '')), 
      new SchedulerEvent('6','44555', null, moment().add(2, 'days').set({ hours: 9, minutes: 0 }).toDate(), moment().add(5, 'days').set({ hours: 17, minutes: 0 }).toDate(), PlanningState.MAINTAIN + (striped ? ' striped': ''))
      ]);
    const schedulerRow4: SchedulerRow = new SchedulerRow(
      'Ressource 4',
       null, 
       [new SchedulerEvent('7','44555', null,moment().subtract(1, 'days').set({ hours: 9, minutes: 0 }).toDate(), moment().add(1, 'days').set({ hours: 17, minutes: 0 }).toDate(), PlanningState.STARTED + (striped ? ' striped': ''))
      ]);
    const schedulerRows: SchedulerRow[] = [schedulerRow, schedulerRow2, schedulerRow3, schedulerRow4];

    return schedulerRows;
  }


}
