import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SassHelperComponent } from 'src/app/config/sass-helper.component';


export enum StrokeForm {
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle'
}

@Component({
  selector: 'stroked-progressbar-component',
  standalone: true,
  imports:[
    CommonModule, 
    FontAwesomeModule,
    SassHelperComponent
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

  @Input() size: number = 250; //pixel

  @Input() strokeWidth: number = 30; //pixel

  @Input() strokeDasharray: string = '5'; //pixel

  @Input() form: StrokeForm = StrokeForm.RECTANGLE;

  circleSize: number = 100;
  radius:number = 90;
  bgColor: string| null = null;

  @ViewChild(SassHelperComponent) sassHelper?: SassHelperComponent;

  constructor() { }

  ngOnInit():void{
    this.circleSize = this.size/ 2;
    this.radius = this.circleSize - this.strokeWidth/2;
  }

  ngAfterViewInit (){
    if(this.sassHelper){
      this.bgColor = this.sassHelper.readProperty('bg-color');
      console.log(this.bgColor);
    }
  }

  getIndicatorWidth():string{
    return this.percentage+ '%';
  }

  getProgress():string{
    return `conic-gradient(transparent ${this.percentage}%, rgb(255,255,255,0.7) ${this.percentage}%)`;
  }

}
