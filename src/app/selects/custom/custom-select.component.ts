import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ClickOutsideDirective } from 'src/app/config/directives/click-outside.directive';


@Component({
  selector: 'custom-select-component',
  standalone: true,
  imports:[
    CommonModule, 
    FontAwesomeModule, 
    FormsModule, 
    ClickOutsideDirective
  ],
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {

  show: boolean = false;

  @ViewChild('btn') btn?: ElementRef<HTMLDivElement>;
  @ViewChild('menu') menu?: ElementRef<HTMLDivElement>;

  constructor(
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit():void{
    this.changeDetector.detectChanges();
  }

  toggleFilter(): void {
    this.show = !this.show;
  }

  getBtnHeight():number{
    let boundingBtn = this.btn?.nativeElement.getBoundingClientRect();
    if(boundingBtn){
      return boundingBtn.height;
    }else{
      return 0;
    }
  }

  aligmentLeft() : boolean {
    let boundingMenu= this.menu?.nativeElement.getBoundingClientRect();
    let boundingBtn = this.btn?.nativeElement.getBoundingClientRect();

    if(boundingBtn && boundingMenu){
      let right = document.body.scrollWidth - boundingBtn.right;
      //as long as there is enough space on the right, align it to the left
      return right >  boundingMenu.width;
    }else{
      return false;
    }
  }

  handleClickOutside(): void {
    if (this.show) {
      this.show = !this.show;
    }
  }
}

