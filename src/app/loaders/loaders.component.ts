
import { Component, LOCALE_ID } from '@angular/core';
import { faCircleNotch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ThemeChangerComponent } from '../layout/theme-changer/theme-changer.component';
import { FaIconLoaderComponent } from './fa-icon-loader/fa-icon-loader.component';
import { LoaderComponent } from './loader/loader.component';

@Component({
  selector: 'loaders-component',
  standalone: true,
  providers:[{ provide: LOCALE_ID, useValue: 'de-DE'}],
  imports:[
    ThemeChangerComponent,
    FaIconLoaderComponent,
    LoaderComponent
  ],
  templateUrl: './loaders.component.html',
  styleUrls: ['./loaders.component.scss']
})
export class LoadersComponent {

  faSpinner = faSpinner;
  faCircleNotch = faCircleNotch;

}
