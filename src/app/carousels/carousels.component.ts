
import { Component } from '@angular/core';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { CarouselComponent } from './carousel/carousel.component';

@Component({
  selector: 'carousels-component',
  standalone: true,
  imports:[CarouselComponent, ThemeChangerComponent],
  templateUrl: './carousels.component.html',
  styleUrls: ['./carousels.component.scss']
})
export class CarouselsComponent {

  slides = [
    { src: "assets/Bild1.jpg" },
    { src: "assets/Bild2.jpg" }
  ];
  textArray= [
    { title: "Überschrift 1", desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." },
    { title: "Überschrift 2", desc:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua." }
  ]

  constructor() { }

}
