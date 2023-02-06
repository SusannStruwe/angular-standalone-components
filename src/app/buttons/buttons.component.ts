
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faTwitter, faXing } from '@fortawesome/free-brands-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { BorderBtnComponent } from './border-btn/border-btn.component';
import { BtnGoupComponent } from './btn-group/btn-group.component';
import { CircleBtnComponent } from './circle-btn/circle-btn.component';

@Component({
  selector: 'buttons-component',
  standalone: true,
  imports:[ 
    BorderBtnComponent, 
    CircleBtnComponent,
    BtnGoupComponent,
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

  buttons = [
    {text:"left", icon: faXing, active: false},
    {text:"middle", icon: faTwitter, active: true},
    {text:"right", icon: faLinkedinIn, active: false}
  ];
  buttons2 = [
    {text:"1", icon: null, active: false},
    {text:"2", icon: null, active: true},
    {text:"3", icon: null, active: false},
    {text:"4", icon: null, active: false}
  ];
  buttons3 = [
    {text: null, icon: faXing, active: false},
    {text: null, icon: faTwitter, active: true},
    {text: null, icon: faLinkedinIn, active: false}
  ];
  clickedBtnText = "";

  constructor() { }


  clickedBtn(text: string){
    this.clickedBtnText = text;
  }
}
