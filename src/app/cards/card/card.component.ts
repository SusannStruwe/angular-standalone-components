import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'card-component',
  standalone: true,
  imports:[CommonModule, FontAwesomeModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  @Input() width?: number;

  @Input() height?: number;

  @Input() title?: string;

  @Input() description?: string;

  @Input() imageUrl?: string;

  @Input() bgColor?: string;


  constructor() { }

}
