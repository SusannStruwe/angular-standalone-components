import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ClickOutsideDirective } from 'src/app/config/directives/click-outside.directive';
import { SelectItem } from '../select-model';


@Component({
  selector: 'select-component',
  standalone: true,
  imports:[
    CommonModule, 
    FontAwesomeModule, 
    FormsModule, 
    ClickOutsideDirective
  ],
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {

  @Input() items: SelectItem[] = [];
  @Input() buttonText: string = "";
  @Input() faIcon?: IconDefinition;
  @Input() withFilter?: boolean;
  @Input() filterPlaceholder?: string;

  @Output() itemSelected = new EventEmitter<SelectItem>();
  
  itemsBefore: SelectItem[] = [];
  selectedItem?: SelectItem;
  filter: string = '';
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
    this.selectedItem = item;
    this.itemSelected.emit(this.selectedItem);
  }

  getSortedFilterList(list: SelectItem[]): SelectItem[] {
    list = list.sort((a, b) => a.text.localeCompare(b.text));
    return list;
  }


  filterAndSort(): void {
    this.items = this.itemsBefore!.filter(
      (item: SelectItem) => !this.filter || item.text.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}

