import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'segmented-btn-component',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule],
  templateUrl: './segmented-btn.component.html',
  styleUrls: ['./segmented-btn.component.scss']
})
export class SegmentedBtnComponent {

  // example --> primary or gray
  @Input() color?: string;
  // example ->   buttons = [{text:"left", icon: faXing, active: false}]
  @Input() btnArray: any[] = [];
  // example ->   left
  @Input() activeBtn?: string ;

  @Output() btnSelected = new EventEmitter<string>();
  
  constructor(
  ) { }


  btnClick(item: any): void {
    if(item.text){
      this.activeBtn = item.text;
    }else{
      this.activeBtn = item.icon;
    }
    
    this.btnSelected.emit(item);
  }

}
