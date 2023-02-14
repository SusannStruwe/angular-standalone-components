import { CommonModule, registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { Component, EventEmitter, Input, LOCALE_ID, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

registerLocaleData(localeDe);

@Component({
  selector: 'date-range-picker-component',
  standalone: true,
  providers:[{ provide: LOCALE_ID, useValue: 'de-DE'}],
  imports:[
    CommonModule, 
    FormsModule, 
    FontAwesomeModule
  ],
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss']
})
export class DateRangePickerComponent {

  faCalender = faCalendar;

  @Input() startDate?: Date;
  @Input() endDate?: Date
  @Output() startDateChanged = new EventEmitter<Date>();
  @Output() endDateChanged = new EventEmitter<Date>();
    
  constructor() { }

  changeStartDate(event: Event): void{
    this.startDateChanged.emit(this.startDate);
  }

  changeEndDate(event: Event): void{
    this.endDateChanged.emit(this.endDate);
  }

  showStartDatePicker(){
    const inputDateElement: HTMLInputElement | null = document.querySelector('#startdate-input');
    if(inputDateElement){
      inputDateElement.showPicker();
    }
  }

  showEndDatePicker(){
    const inputDateElement: HTMLInputElement | null = document.querySelector('#enddate-input');
    if(inputDateElement){
      inputDateElement.showPicker();
    }
  }
}
