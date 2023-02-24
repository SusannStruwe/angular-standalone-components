
import { CommonModule } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { PieChartComponent } from './pie/pie-chart.component';

@Component({
  selector: 'charts-component',
  standalone: true,
  providers:[{ provide: LOCALE_ID, useValue: 'de-DE'}],
  imports:[
    CommonModule,
    FontAwesomeModule,
    ThemeChangerComponent,
    PieChartComponent
  ],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent {

  faPlay = faPlay;
  faPause = faPause;

  progress: number = 90;
  isRunning: boolean = false;
  intervalId?:any;
  
  constructor() { }

 
}
