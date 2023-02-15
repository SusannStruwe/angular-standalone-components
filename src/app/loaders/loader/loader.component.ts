import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'loader-component',
  standalone: true,
  imports:[
    CommonModule, 
    FontAwesomeModule
  ],
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {

  @Input() style?: string;
  //example -> linear, ease
  @Input() animation?: string;  

  @Input() text?: string;  

  constructor() { }
}
