

import { Component } from '@angular/core';
import { BorderedBtnComponent } from '../buttons/bordered-btn/bordered-btn.component';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { SplitPaneComponent } from './split-pane/split-pane.component';


@Component({
  selector: 'split-panes-component',
  standalone: true,
  imports: [
    BorderedBtnComponent,
    ThemeChangerComponent,
    SplitPaneComponent
],
  templateUrl: './split-panes.component.html',
  styleUrls: ['./split-panes.component.scss']
})
export class SplitPanesComponent {
  
  constructor() { }
}
