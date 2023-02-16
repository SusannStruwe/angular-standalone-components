
import { Component, LOCALE_ID } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { MultiSelectItem, MultiSelectComponent } from './multi-select/multi-select.component';

@Component({
  selector: 'dropdowns-component',
  standalone: true,
  providers:[{ provide: LOCALE_ID, useValue: 'de-DE'}],
  imports:[
    ThemeChangerComponent,
    MultiSelectComponent
  ],
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent {

  items: MultiSelectItem[] = [ {text:'Apfel'}, {text:'Birne'}, {text:'Orange'}, {text: 'Heidelbeeren'}];
  faFilter = faFilter;
  placeholder = "Liste filtern...";
  
  constructor() { }

 
}
