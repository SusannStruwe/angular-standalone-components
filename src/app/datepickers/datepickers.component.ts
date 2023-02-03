
import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';

@Component({
  selector: 'datepickers-component',
  standalone: true,
  imports:[DateRangePickerComponent, DatePickerComponent, DatePipe],
  templateUrl: './datepickers.component.html',
  styleUrls: ['./datepickers.component.scss']
})
export class DatepickersComponent {
  
  date: Date = new Date();
  startDate: Date = new Date();
  endDate: Date = new Date();
  
  constructor() { }

  dateChanged(date: Date){
    this.date = date;
  }

  startDateChanged(date: Date){
    this.startDate = date;
  }

  endDateChanged(date: Date){
    this.endDate = date;
  }
}
