import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'border-filled-btn-component',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule],
  templateUrl: './border-filled-btn.component.html',
  styleUrls: ['./border-filled-btn.component.scss']
})
export class BorderFilledBtnComponent {

  @Input() buttonText?: string;
  @Input() faIcon?: IconDefinition;
  @Input() disabled?: boolean;
  @Input() color?: string;
  @Input() isLoading?: boolean;
  
  constructor(

  ) { }

}
