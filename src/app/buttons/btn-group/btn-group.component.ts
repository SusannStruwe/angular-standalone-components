import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'btn-group-component',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule],
  templateUrl: './btn-group.component.html',
  styleUrls: ['./btn-group.component.scss']
})
export class BtnGoupComponent {

  @Input() faIcon?: IconDefinition;
  @Input() backgroundColor?: string;
  
    
  constructor(

  ) { }

}
