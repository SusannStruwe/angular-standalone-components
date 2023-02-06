
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'preview-component',
  standalone: true,
  imports:[RouterModule],
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {

  constructor() { }

}
