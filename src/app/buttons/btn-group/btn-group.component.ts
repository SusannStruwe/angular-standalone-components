import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'btn-group-component',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule],
  templateUrl: './btn-group.component.html',
  styleUrls: ['./btn-group.component.scss']
})
export class BtnGoupComponent {

  // example --> primary or gray
  @Input() color?: string;
  // example ->   buttons = [{text:"left", icon: faXing, active: false}]
  @Input() btnArray: any[] = [];
  // example ->   left
  @Input() activeBtn?: string ;

  @Output() clickedBtn = new EventEmitter<string>();
  
  constructor(
  ) { }


  btnClick(item: any): void {
    if(item.text){
      this.activeBtn = item.text;
    }else{
      this.activeBtn = item.icon;
    }
    
    this.clickedBtn.emit(item);
  }

}
