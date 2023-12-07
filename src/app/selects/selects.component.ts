

import { Component, LOCALE_ID } from '@angular/core';
import { faBars, faEllipsisVertical, faFilter } from '@fortawesome/free-solid-svg-icons';
import { BorderedBtnComponent, HoverStyle } from '../buttons/bordered-btn/bordered-btn.component';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { CustomSelectComponent } from './custom/custom-select.component';
import { MultiSelectComponent } from './multi-select/multi-select.component';
import { SelectItem } from './select-model';
import { SelectComponent } from './select/select.component';

@Component({
  selector: 'selects-component',
  standalone: true,
  providers:[{ provide: LOCALE_ID, useValue: 'de-DE'}],
  imports: [
    BorderedBtnComponent,
    ThemeChangerComponent,
    MultiSelectComponent,
    SelectComponent,
    CustomSelectComponent
],
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.scss']
})
export class SelectsComponent {

  shiningStyle = HoverStyle.SHINING;
  fillingStyle = HoverStyle.FILLING;
  faFilter = faFilter;
  faBars = faBars;
  faElipsis = faEllipsisVertical;
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
