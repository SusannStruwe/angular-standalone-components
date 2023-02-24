import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'pie-chart-component',
  standalone: true,
  imports:[
    CommonModule, 
    FontAwesomeModule
  ],
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {

  @Input() textColor: string = "black";

  @Input() dataArray: number[] = [10, 90];

  @Input() labelArray: string[] = ["rot", "blau"];

  @Input() colorArray: string[] = ["red", "blue"];

  @ViewChild('svg') svgRef?: ElementRef<HTMLDivElement>;

  circleWidth: number = 200;
  centeredPos: number = 100;
  circleRadius: number = 50;
  strokeWidth: number = 100;

  constructor() { }

  ngAfterViewChecked(){
    if(this.svgRef){
      console.log(this.svgRef.nativeElement.getBoundingClientRect().width);
      this.circleWidth = this.svgRef.nativeElement.getBoundingClientRect().width;
      this.centeredPos = this.svgRef.nativeElement.getBoundingClientRect().width / 2;
      this.circleRadius = this.svgRef.nativeElement.getBoundingClientRect().width / 4;
      this.strokeWidth = this.svgRef.nativeElement.getBoundingClientRect().width / 2;
    }
  }

  getDashArray():string{
    var result = ((45 * 360) / 100);
    return result +" 360";
  }

}
