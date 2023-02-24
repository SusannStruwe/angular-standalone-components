import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


export enum CarouselType {
  FULLSCREEN_LEFT_RIGHT = 1,
  FULLSCREEN_OVERLAY_LEFT_RIGHT = 2,
  FULLSCREEN_CIRCLE = 3,
  SPLIT_CIRCLE = 4
}

/**
 * FULLSCREEN_LEFT_RIGHT: fullscreen slides with navigation buttons on the left and right
 * FULLSCREEN_OVERLAY_LEFT_RIGHT: fullscreen slides with overlaying navigation buttons on the left and right
 * FULLSCREEN_CIRCLE: fullscreen slides with circle buttons on the bottom
 * SPLIT_CIRCLE: splits slides and text horizontally + circle buttons on the bottom
 */


@Component({
  selector: 'carousel-component',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  
  // example --> slides = [ { src: "assets/image.png" } ]
  @Input() slides?: any[];
  // example --> textArray = [ { title: "Title 1", desc: "Beschreibung" } ]
  @Input() textArray?: any[];
   // example --> left or right
  @Input() textPosition?: string;
  // to use different sizes
  @Input() height?: number;
  // example --> type = 1
  @Input() type?: CarouselType;
  
  @Input() diashow?: boolean;

  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  currentSlideIndex:number = 0;
  diashowInterval: any = 0;
  delay: number = 7000;

  constructor() {}

  ngOnInit(){
    if(this.type && this.type != 1 && this.diashow){
      this.setInterval();
    }
  }

  ngOnDestroy():void{
    if (this.diashowInterval) {
      clearInterval(this.diashowInterval);
    }
  }

  previousSlide():void {
    const previous = this.currentSlideIndex - 1;
    this.currentSlideIndex = previous < 0 ? this.slides!.length - 1 : previous;
  }

  nextSlide():void {
    const next = this.currentSlideIndex + 1;
    this.currentSlideIndex = next === this.slides!.length ? 0 : next;
  }

  setSlide(index: number):void{
    this.currentSlideIndex = index;
  }


  setInterval():void{
    this.diashowInterval = setInterval(() => {
      this.nextSlide();
    }, this.delay);
  }



}
