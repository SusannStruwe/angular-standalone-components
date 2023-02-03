import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

/**
 *
 * @howToUse
 * ```
 *     <some-element (clickOutside)="handleClickOutside()">...</some-element>
 * ```
 */
@Directive({
  selector: '[clickOutside]',
  standalone: true,
})
export class ClickOutsideDirective {
  @Output('clickOutside') outsideClick = new EventEmitter<MouseEvent>();

  constructor(private elementRef: ElementRef) {}

  @HostListener('document:click', ['$event.target'])
  onClick(target: Event): void {
    const clickedInside = this.elementRef.nativeElement.contains(target);
    if (!clickedInside) {
      this.outsideClick.emit();
    }
  }
}
