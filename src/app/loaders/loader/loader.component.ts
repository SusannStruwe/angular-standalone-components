import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export enum LoaderStyle {
  SPINNER = 'spinner',
  SPINNER2 = 'spinner-2',
  DOT_LOADER = 'dot-loader',
  DOT_LOADER2 = 'dot-loader-2'
}

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

  @Input() loaderStyle?: LoaderStyle;
  //example -> linear, ease
  @Input() animation?: string;  

  @Input() text?: string;  

  constructor() { }
}
