
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faTwitter, faXing } from '@fortawesome/free-brands-svg-icons';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { SassHelperComponent } from '../config/sass-helper.component';
import { ThemeChangerComponent } from '../config/theme-changer/theme-changer.component';
import { BorderFilledBtnComponent } from './border-filled-btn/border-filled-btn.component';
import { BorderShineBtnComponent } from './border-shine-btn/border-shine-btn.component';
import { CircleBtnComponent } from './circle-btn/circle-btn.component';

@Component({
  selector: 'buttons-component',
  standalone: true,
  imports:[ 
    BorderFilledBtnComponent, 
    BorderShineBtnComponent, 
    CircleBtnComponent,
    SassHelperComponent,
    FormsModule,
    FontAwesomeModule,
    ThemeChangerComponent
  ],
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {

  buttonText = "ButtonText";

  faLinkedinIn = faLinkedinIn;
  faXing = faXing;
  faTwitter = faTwitter;

  constructor() { }

}
