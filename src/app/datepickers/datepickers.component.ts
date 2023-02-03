
import { Component } from '@angular/core';

@Component({
  selector: 'datepickers-component',
  standalone: true,
  imports:[],
  templateUrl: './datepickers.component.html',
  styleUrls: ['./datepickers.component.scss']
})
export class DatepickersComponent {

  startDate: Date = new Date();
  endDate: Date = new Date();
  
  constructor() { }

}
