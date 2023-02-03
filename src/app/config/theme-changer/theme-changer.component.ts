import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { SassHelperComponent } from '../sass-helper.component';

@Component({
  selector: 'theme-changer-component',
  standalone: true,
  imports:[
    CommonModule, 
    FontAwesomeModule,
    SassHelperComponent,
    FormsModule
  ],
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss']
})
export class ThemeChangerComponent {

  faRefresh = faRefresh;
  primaryColor: string| null = null;

  @ViewChild(SassHelperComponent) sassHelper?: SassHelperComponent;
    
  constructor(private changeDetector: ChangeDetectorRef) { }

  ngAfterViewInit (){
    if(this.sassHelper){
      this.primaryColor = this.sassHelper.readProperty('primary-color');
      this.changeDetector.detectChanges();
    }
  }

  refreshView(){
    this.sassHelper?.setProperty(this.primaryColor!,'primary-color');
    this.sassHelper?.setProperty(this.primaryColor!,'primary-color-dark');
  }

}
