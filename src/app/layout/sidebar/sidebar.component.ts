
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'sidebar-component',
  standalone: true,
  imports:[
    RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {


  constructor() { }

}
