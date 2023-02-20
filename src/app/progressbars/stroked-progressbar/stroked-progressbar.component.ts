import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SassHelperComponent } from 'src/app/config/sass-helper.component';



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

  @Input() width: number = 200; //pixel

  @Input() strokeWidth: number = 30; //pixel

  @Input() strokeDasharray: string = '5'; //pixel

  constructor() { }

  getIndicatorWidth():string{
    return this.percentage+ '%';
  }

}
