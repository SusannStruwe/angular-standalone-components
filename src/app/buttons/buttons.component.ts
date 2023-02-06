
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faTwitter, faXing } from '@fortawesome/free-brands-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { BorderBtnComponent } from './border-btn/border-btn.component';
import { CircleBtnComponent } from './circle-btn/circle-btn.component';

@Component({
  selector: 'buttons-component',
  standalone: true,
  imports:[ 
    BorderBtnComponent, 
    CircleBtnComponent,
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
  faLoader = faCircleNotch;

  shiningStyle = "shining";
  fillingStyle = "filling";

  constructor() { }

}
