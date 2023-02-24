import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


export enum StrokeForm {
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle'
}

@Component({
  selector: 'stroked-progressbar-component',
  standalone: true,
  imports:[
    CommonModule, 
    FontAwesomeModule
  ],
  templateUrl: './stroked-progressbar.component.html',
  styleUrls: ['./stroked-progressbar.component.scss']
})
export class StrokedProgressbarComponent {

  @Input() percentage:number = 0;

  @Input() progressColor: string = "#00bdab"; 

  @Input() progressBgColor: string = "#ddd";  

  @Input() unit:string = '%';

  @Input() fontSize:number = 1.5;

  @Input() size: number = 200; //pixel

  @Input() strokeWidth: number = 30; //pixel

  @Input() strokeDasharray: string = '7'; //pixel

  @Input() form: StrokeForm = StrokeForm.RECTANGLE;

  circleSize: number = 100;
  radius:number = 90;
  bgColor: string = 'white';

  constructor() { }

  ngOnInit():void{
    this.circleSize = this.size/ 2;
    this.radius = this.circleSize - this.strokeWidth/2;
  }

  getIndicatorWidth():string{
    return this.percentage+ '%';
  }

  getProgress():string{
    let bodyStyles = window.getComputedStyle(document.body);
    if(bodyStyles.getPropertyValue('--bg-color')) this.bgColor = bodyStyles.getPropertyValue('--bg-color');

    return `conic-gradient(transparent ${this.percentage}%, ${this.bgColor} ${this.percentage}%)`;
  }

}
