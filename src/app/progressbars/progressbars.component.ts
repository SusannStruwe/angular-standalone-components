
import { CommonModule } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPause, faPlay } from '@fortawesome/free-solid-svg-icons';
import { BorderBtnComponent } from '../buttons/border-btn/border-btn.component';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { CircularProgressbarComponent } from './circular-progressbar/circular-progressbar.component';
import { RectangleProgressbarComponent } from './rectangle-progressbar/rectangle-progressbar.component';
import { StrokedProgressbarComponent } from './stroked-progressbar/stroked-progressbar.component';

@Component({
  selector: 'progressbars-component',
  standalone: true,
  providers:[{ provide: LOCALE_ID, useValue: 'de-DE'}],
  imports:[
    CommonModule,
    BorderBtnComponent,
    FontAwesomeModule,
    ThemeChangerComponent,
    CircularProgressbarComponent,
    RectangleProgressbarComponent,
    StrokedProgressbarComponent
  ],
  templateUrl: './progressbars.component.html',
  styleUrls: ['./progressbars.component.scss']
})
export class ProgressbarsComponent {

  faPlay = faPlay;
  faPause = faPause;

  progress: number = 90;
  isRunning: boolean = false;
  intervalId?:any;
  
  constructor() { }

  runProgress():void{
    this.progress = 1;

    this.intervalId = setInterval(() => {
      this.isRunning = true;
      this.progress = this.progress + 1;
      if(this.progress === 100){
        clearInterval(this.intervalId);
        this.isRunning = false;
      } 
    }, 100);
  }

  stopProgress():void{
    clearInterval(this.intervalId);
    this.isRunning = false;
  }
 
}
