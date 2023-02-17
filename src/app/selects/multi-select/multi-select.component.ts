import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ClickOutsideDirective } from 'src/app/config/directives/click-outside.directive';
import { SelectItem } from '../select-model';


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

  @Input() items: SelectItem[] = [];
  @Input() buttonText: string = "";
  @Input() faIcon?: IconDefinition;
  @Input() withFilter?: boolean;
  @Input() filterPlaceholder?: string;

  @Output() itemsSelected = new EventEmitter<SelectItem[]>();
  
  itemsBefore: SelectItem[] = [];
  selectedItems: SelectItem[] = [];
  filter:string = '';
  show: boolean = false;

  @ViewChild('filterInput') filterInput?: ElementRef<HTMLDivElement>;
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

  selectElement(item: SelectItem): void {
    if (!this.isInFilterArray(item)) {
      this.selectedItems?.push(item);
    } else {
      this.selectedItems = this.selectedItems?.filter(el => el.text !== item.text)!;
    }
    this.itemsSelected.emit(this.selectedItems);
  }

  getSortedFilterList(list: SelectItem[]): SelectItem[] {
    list = list.sort((a, b) => a.text.localeCompare(b.text));
    return list;
  }

  isInFilterArray(item: SelectItem): boolean {
    return this.selectedItems!.some((el: SelectItem) => el.text === item.text);
  }

  filterAndSort(): void {
    this.items = this.itemsBefore!.filter(
      (item: SelectItem) => !this.filter || item.text.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}

