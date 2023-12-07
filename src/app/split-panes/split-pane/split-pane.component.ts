import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickOutsideDirective } from 'src/app/config/directives/click-outside.directive';


@Component({
  selector: 'split-pane-component',
  standalone: true,
  imports:[
    CommonModule, 
    FontAwesomeModule, 
    FormsModule, 
    ClickOutsideDirective
  ],
  templateUrl: './split-pane.component.html',
  styleUrls: ['./split-pane.component.scss']
})
export class SplitPaneComponent {


  constructor(
    private changeDetector: ChangeDetectorRef,
  ) {}



}

