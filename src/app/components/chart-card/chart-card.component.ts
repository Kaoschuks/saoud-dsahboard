import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss'],
})
export class ChartCardComponent implements AfterViewInit {

  private lineChart: Chart;
  @ViewChild("lineCanvas") lineCanvas: ElementRef;
  @Input() color: string;
  @Input() chartdata: Array<any> = [];
  @Input() title: string;
  @Input() number: string;
  @Input() icon: string;
  constructor() { }

  ngAfterViewInit() {
    console.log(this.chartdata)
    Chart.defaults.scale.gridLines.display = false;
    Chart.defaults.global.legend.display = false;
    this.lineChart = new Chart(this.lineCanvas.nativeElement, {
      type: "line",
      data: {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
          {
            label: " ",
            // gradient: gradient,
            strokeColor : "#ff6c23",
            pointColor : "#fff",
            pointStrokeColor : "#ff6c23",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "#ff6c23",
            data: this.chartdata,
          }
        ]
      },
      options: {
         scales: {
          xAxes: [{
           ticks: {
             display: false
           }
         }],
         yAxes: [{
          ticks: {
            display: false
          }
        }]
        }
      }
    });
  }

}
