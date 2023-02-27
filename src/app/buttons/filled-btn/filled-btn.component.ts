import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


export enum HoverStyle {
  RIPPLE = 'ripple'
}

@Component({
  selector: 'filled-btn-component',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule],
  templateUrl: './filled-btn.component.html',
  styleUrls: ['./filled-btn.component.scss']
})
export class FilledBtnComponent {

  @Input() buttonText?: string;

  @Input() faIcon?: IconDefinition;

  @Input() disabled?: boolean;
  // example --> primary or gray
  @Input() color: string = "primary";
  // example --> filling or shining
  @Input() hoverStyle: string = HoverStyle.RIPPLE;
  // example --> spin or not
  @Input() spinning: boolean = false;
  // example --> active or not
  @Input() active?: boolean;
    
  constructor(

  ) { }


}
