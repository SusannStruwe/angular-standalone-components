import { CommonModule, registerLocaleData } from '@angular/common';
import { Component, EventEmitter, Input, LOCALE_ID, Output } from '@angular/core';
import localeDe from '@angular/common/locales/de';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { Platform, PlatformModule } from '@angular/cdk/platform';

registerLocaleData(localeDe);

@Component({
  selector: 'date-picker-component',
  standalone: true,
  providers:[{ provide: LOCALE_ID, useValue: 'de-DE'}],
  imports:[
    CommonModule, 
    FormsModule, 
    FontAwesomeModule,
    PlatformModule
  ],
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {

  @Input() date?: Date;
  
  @Output() dateChanged = new EventEmitter<Date>();

  faCalender = faCalendar;
  showOverlayBtn:boolean = true;

  constructor(public platform: Platform) { }

  ngOnInit(){
    //hide overlay button on ios, safari or webkit because it does not work
    if (this.platform.IOS || this.platform.SAFARI || this.platform.WEBKIT) {
      this.showOverlayBtn = false;
    }
  }

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
