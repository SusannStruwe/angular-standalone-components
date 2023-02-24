import { CommonModule } from '@angular/common';
import { Component, Input} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft, faArrowRight, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


/**
 * Type = 1: fullscreen slides without text and navigation buttons on the left and right
 * Type = 2: fullscreen slides without text and circle buttons on the bottom
 * Type = 3: splits slides and text horizontally and circle buttons on the bottom
 * 

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
  @Input() maxHeight?: number;
  // example --> type = 1
  @Input() type?: number;
  
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
