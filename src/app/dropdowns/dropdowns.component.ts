
import { CommonModule } from '@angular/common';
import { Component, LOCALE_ID } from '@angular/core';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { SelectItem } from './select-model';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'dropdowns-component',
  standalone: true,
  providers:[{ provide: LOCALE_ID, useValue: 'de-DE'}],
  imports:[
    CommonModule,
    ThemeChangerComponent,
    MultiSelectComponent,
    SelectComponent
  ],
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent {

  faFilter = faFilter;
  placeholder = "Liste filtern...";
  items: SelectItem[] = [ {text:'Apfel'}, {text:'Birne'}, {text:'Orange'}, {text: 'Heidelbeeren'}];
  
  selectedItems: SelectItem[] = [];
  selectedItem?: SelectItem;

  
  constructor() { }

  selectItems(items: SelectItem[]):void{
    this.selectedItems = items;
  }

  selectItem(item: SelectItem):void{
    this.selectedItem = item;
  }
 
}
