
import { Component } from '@angular/core';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
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

  constructor() { }

}
