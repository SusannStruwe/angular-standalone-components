
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faLinkedinIn, faTwitter, faXing } from '@fortawesome/free-brands-svg-icons';
import { faAlignCenter, faAlignLeft, faAlignRight, faCircleNotch } from '@fortawesome/free-solid-svg-icons';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { BorderedBtnComponent, HoverStyle } from './bordered-btn/bordered-btn.component';
import { SegmentedBtnComponent } from './segmented-btn/segmented-btn.component';
import { CircleBtnComponent } from './circle-btn/circle-btn.component';
import { FilledBtnComponent } from './filled-btn/filled-btn.component';

@Component({
  selector: 'buttons-component',
  standalone: true,
  imports:[ 
    BorderedBtnComponent, 
    CircleBtnComponent,
    SegmentedBtnComponent,
    FilledBtnComponent,
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
    {text: null, icon: faAlignLeft},
    {text: null, icon: faAlignCenter},
    {text: null, icon: faAlignRight}
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
