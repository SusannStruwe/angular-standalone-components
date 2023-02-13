import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'circle-btn-component',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule],
  templateUrl: './circle-btn.component.html',
  styleUrls: ['./circle-btn.component.scss']
})
export class CircleBtnComponent {

  @Input() faIcon?: IconDefinition;
  @Input() backgroundColor?: string;
  @Input() active?: boolean;

  constructor(

  ) { }

}
