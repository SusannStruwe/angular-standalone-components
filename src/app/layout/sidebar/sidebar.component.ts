
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBrush } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'sidebar-component',
  standalone: true,
  imports:[
    RouterModule, FontAwesomeModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  
  faBrush = faBrush;
  templateDark = false;

  constructor() { }

  toogleTemplate():void{
    document.body.classList.toggle("dark-theme");
    this.templateDark = !this.templateDark;
  }
}
