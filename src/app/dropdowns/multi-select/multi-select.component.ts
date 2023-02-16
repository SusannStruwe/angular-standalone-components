import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ClickOutsideDirective } from 'src/app/config/directives/click-outside.directive';


export class MultiSelectItem {
  constructor(
      public text: string) {}
}


@Component({
  selector: 'multi-select-component',
  standalone: true,
  imports:[
    CommonModule, 
    FontAwesomeModule, 
    FormsModule, 
    ClickOutsideDirective
  ],
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent {

  @Input() items: MultiSelectItem[] = [];
  @Input() buttonText: string = "";
  @Input() faIcon?: IconDefinition;
  @Input() withFilter?: boolean;
  @Input() filterPlaceholder?: string;

  itemsBefore: MultiSelectItem[] | null = [];
  filteredItems: MultiSelectItem[] | null = [];
  filter = '';
  @ViewChild('filterInput') filterInput?: ElementRef;
  show: boolean = false;

  @ViewChild('btn') btn?: ElementRef<HTMLDivElement>;
  @ViewChild('menu') menu?: ElementRef<HTMLDivElement>;

  constructor(
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit():void{
    this.itemsBefore = JSON.parse(JSON.stringify(this.items));
    this.changeDetector.detectChanges();
  }

  toggleFilter(): void {
    this.show = !this.show;
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

  selectElement(item: MultiSelectItem): void {
    if (!this.isInFilterArray(item)) {
      this.filteredItems?.push(item);
    } else {
      this.filteredItems = this.filteredItems?.filter(el => el.text !== item.text)!;
    }
    //emitter itemSelected
  }

  getSortedFilterList(list: MultiSelectItem[]): MultiSelectItem[] {
    list = list.sort((a, b) => a.text.localeCompare(b.text));
    return list;
  }

  isInFilterArray(item: MultiSelectItem): boolean {
    return this.filteredItems!.some((el: MultiSelectItem) => el.text === item.text);
  }

  filterAndSort(): void {
    this.items = this.itemsBefore!.filter(
      (item: MultiSelectItem) => !this.filter || item.text.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}

