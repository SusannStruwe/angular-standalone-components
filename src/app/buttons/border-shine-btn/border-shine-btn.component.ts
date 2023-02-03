import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'border-shine-btn-component',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule],
  templateUrl: './border-shine-btn.component.html',
  styleUrls: ['./border-shine-btn.component.scss']
})
export class BorderShineBtnComponent {

  @Input() buttonText?: string;
  @Input() faIcon?: IconDefinition;
    
  constructor(

  ) { }

}
