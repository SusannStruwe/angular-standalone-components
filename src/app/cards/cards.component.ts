
import { Component } from '@angular/core';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { CardComponent } from './card/card.component';


@Component({
  selector: 'cards-component',
  standalone: true,
  imports:[
    ThemeChangerComponent, 
    CardComponent
  ],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  constructor() { }

}
