
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';


@Component({
  selector: 'fa-icon-loader-component',
  standalone: true,
  imports: [
    FontAwesomeModule
],
  templateUrl: './fa-icon-loader.component.html',
  styleUrls: ['./fa-icon-loader.component.scss']
})
export class FaIconLoaderComponent {
  //example -> #00bdab
  @Input() color?: string;

  @Input() faIcon?: IconDefinition;
  //in pixel
  @Input() size?: number;

  @Input() text?: string;  

  constructor() { }

}
