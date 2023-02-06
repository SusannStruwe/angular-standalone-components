import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import localeDe from '@angular/common/locales/de';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

registerLocaleData(localeDe, 'de-DE', 'de');

@Component({
  selector: 'date-picker-component',
  standalone: true,
  imports:[CommonModule, FormsModule, FontAwesomeModule],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {

  faCalender = faCalendar;

  @Input() date?: Date;
  
  @Output() dateChanged = new EventEmitter<Date>();

  constructor() { }

  changeDate(event: Event): void{
    this.dateChanged.emit(this.date);
  }

  showDatePicker(){
    const inputDateElement: HTMLInputElement | null = document.querySelector('#date-input');
    if(inputDateElement){
      inputDateElement.showPicker();
    }
  }
}
