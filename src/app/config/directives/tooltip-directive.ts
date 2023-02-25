import { Directive, ElementRef, HostListener, Input } from "@angular/core";


@Directive({
    selector: '[tooltip]',
    standalone: true
  })
  export class TooltipDirective {

    @Input() tooltip = ''; // The text for the tooltip to display
    @Input() placement? = 'bottom';
    @Input() delay? = 500;
  
    timer:any = 0;
    private tooltipEl: HTMLElement | null = null;

    constructor(private el: ElementRef) { }
  
    ngOnDestroy(): void {
      if (this.tooltipEl) { this.tooltipEl.remove() }
    }
  
    @HostListener('mouseenter', ['$event']) onMouseEnter(event:MouseEvent) {
        this.timer = setTimeout(() => {
            //let x = this.el.nativeElement.getBoundingClientRect().left + this.el.nativeElement.offsetWidth / 2; // Get the middle of the element
            let y = this.el.nativeElement.getBoundingClientRect().top + this.el.nativeElement.offsetHeight + 6; // Get the bottom of the element
            this.createTooltipPopup(event.clientX, y);
        }, this.delay)
    }
  
    @HostListener('mouseleave',['$event']) onMouseLeave(event: MouseEvent) {
        clearTimeout(this.timer);
        if (this.tooltipEl) { this.tooltipEl.remove() }
    }
  
    private createTooltipPopup(x: number, y: number) {
        let popup = document.createElement('div');
        popup.innerHTML = this.tooltip;
        popup.setAttribute("class", "tooltip-container bottom ");
        popup.style.top =  y + "px";
        popup.style.left = x + "px";

        document.body.appendChild(popup);
        this.tooltipEl = popup;
        setTimeout(() => {
            if (this.tooltipEl) this.tooltipEl.remove();
        }, 1000); // Remove tooltip
    }
  
  }