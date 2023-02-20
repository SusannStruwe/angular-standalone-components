import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SassHelperComponent } from 'src/app/config/sass-helper.component';

@Component({
  selector: 'rectangle-progressbar-component',
  standalone: true,
  imports:[
    CommonModule, 
    FontAwesomeModule,
    SassHelperComponent
  ],
  templateUrl: './rectangle-progressbar.component.html',
  styleUrls: ['./rectangle-progressbar.component.scss']
})
export class RectangleProgressbarComponent {

  @Input() percentage:number = 0;

  @Input() progressColor: string = "#00bdab"; 

  @Input() progressBgColor: string = "#ddd";  

  @Input() height: number = 35; //pixel

  @Input() bordered: boolean = false;

  @Input() striped: boolean = false;  

  constructor() { }
}
