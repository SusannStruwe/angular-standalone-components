
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardComponent } from 'src/app/cards/card/card.component';


@Component({
  selector: 'preview-component',
  standalone: true,
  imports:[RouterModule, CardComponent],
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent {

  constructor() { }

}
