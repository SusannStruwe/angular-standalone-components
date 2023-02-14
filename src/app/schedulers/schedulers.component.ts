
import { Component } from '@angular/core';
import * as moment from 'moment';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { PlanningState, SchedulerEvent, SchedulerRow, TimeSpan } from './scheduler-model';
import { SchedulingComponent } from './scheduling/scheduling.component';


@Component({
  selector: 'schedulers-component',
  standalone: true,
  imports:[
    ThemeChangerComponent,
    SchedulingComponent
  ],
  templateUrl: './schedulers.component.html',
  styleUrls: ['./schedulers.component.scss']
})
export class SchedulersComponent {

  schedulerRows: SchedulerRow[] = [];
  timeSpan: TimeSpan = TimeSpan.WEEK;

  constructor() { }

  ngOnInit(){
    this.schedulerRows = this.getSampleData();
  }

  schedulerEventSelected(item: SchedulerEvent):void{
    console.log(item);
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
