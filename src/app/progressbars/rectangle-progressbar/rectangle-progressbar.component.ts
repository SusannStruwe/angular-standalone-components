
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'rectangle-progressbar-component',
  standalone: true,
  imports: [
    FontAwesomeModule
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

  @Input() gradient: boolean = false;

  constructor() { }
}
