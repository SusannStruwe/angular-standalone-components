import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


export enum HoverStyle {
  SHINING = 'shining',
  FILLING = 'filling'
}

@Component({
  selector: 'bordered-btn-component',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule],
  templateUrl: './bordered-btn.component.html',
  styleUrls: ['./bordered-btn.component.scss']
})
export class BorderedBtnComponent {

  @Input() buttonText?: string;

  @Input() faIcon?: IconDefinition;

  @Input() disabled?: boolean;
  // example --> primary or gray
  @Input() color: string = "primary";
  // example --> filling or shining
  @Input() hoverStyle: string = HoverStyle.SHINING;
  // example --> spin or not
  @Input() spinning: boolean = false;
  // example --> active or not
  @Input() active?: boolean;
    
  constructor(

  ) { }



}
