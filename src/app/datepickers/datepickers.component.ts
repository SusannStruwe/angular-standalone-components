
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';

@Component({
  selector: 'datepickers-component',
  standalone: true,
  imports:[DateRangePickerComponent, DatePipe],
  templateUrl: './datepickers.component.html',
  styleUrls: ['./datepickers.component.scss']
})
export class DatepickersComponent {

  startDate: Date = new Date();
  endDate: Date = new Date();
  
  constructor() { }

  startDateChanged(date: Date){
    this.startDate = date;
  }

  endDateChanged(date: Date){
    this.endDate = date;
  }
}
