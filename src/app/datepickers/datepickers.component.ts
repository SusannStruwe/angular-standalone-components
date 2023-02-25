import { DatePipe } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { DateRangePickerComponent } from './date-range-picker/date-range-picker.component';

@Component({
  selector: 'datepickers-component',
  standalone: true,
  providers:[{ provide: LOCALE_ID, useValue: 'de-DE'}],
  imports:[
    DateRangePickerComponent, 
    DatePickerComponent, 
    DatePipe, 
    ThemeChangerComponent
  ],
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
