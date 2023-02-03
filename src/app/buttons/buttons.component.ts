
import { Component } from '@angular/core';
import { faLinkedinIn, faTwitter, faXing } from '@fortawesome/free-brands-svg-icons';
import { BorderFilledBtnComponent } from './border-filled-btn/border-filled-btn.component';
import { BorderShineBtnComponent } from './border-shine-btn/border-shine-btn.component';
import { CircleBtnComponent } from './circle-btn/circle-btn.component';

@Component({
  selector: 'buttons-component',
  standalone: true,
  imports:[ 
    BorderFilledBtnComponent, 
    BorderShineBtnComponent, 
    CircleBtnComponent],
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
