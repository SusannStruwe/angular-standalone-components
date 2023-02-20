import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SassHelperComponent } from 'src/app/config/sass-helper.component';

@Component({
  selector: 'circular-progressbar-component',
  standalone: true,
  imports:[
    CommonModule, 
    FontAwesomeModule,
    SassHelperComponent
  ],
  templateUrl: './circular-progressbar.component.html',
  styleUrls: ['./circular-progressbar.component.scss']
})
export class CircularProgressbarComponent {

  @Input() percentage:number = 0;

  @Input() unit:string = '%';

  @Input() fontSize:number = 1.5;

  @Input() progressWidth: number = 20; 

  @Input() progressColor: string = "#00bdab"; 

  @Input() progressBgColor: string = "#ddd";  

  @Input() bordered: boolean = false;  

  @Input() roundedCorner: boolean = false;  


  constructor() { }

  getProgress():string{
    return `conic-gradient(${this.progressColor} ${this.percentage}%, ${this.progressBgColor} ${this.percentage}%)`;
  }

  getRoundedProgress():number{
    return 100 - ((this.percentage/100) * 100);
  }
}
