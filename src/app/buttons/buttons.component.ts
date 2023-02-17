
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faTwitter, faXing } from '@fortawesome/free-brands-svg-icons';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { BorderBtnComponent, HoverStyle } from './border-btn/border-btn.component';
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

  shiningStyle = HoverStyle.SHINING;
  fillingStyle = HoverStyle.FILLING;

  buttons = [
    {text:"left", icon: faXing},
    {text:"middle", icon: faTwitter},
    {text:"right", icon: faLinkedinIn}
  ];
  buttons2 = [
    {text:"1", icon: null},
    {text:"2", icon: null},
    {text:"3", icon: null},
    {text:"4", icon: null}
  ];
  buttons3 = [
    {text: null, icon: faXing},
    {text: null, icon: faTwitter},
    {text: null, icon: faLinkedinIn}
  ];
  clickedBtnText = "";

  constructor() { }


  clickedBtn(item: any){
    if(item.text){
      this.clickedBtnText = item.text;
    }else{
      this.clickedBtnText = item.icon;
    }
   
  }
}
