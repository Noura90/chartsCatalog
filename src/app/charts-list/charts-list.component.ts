import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/charts.service';

@Component({
  selector: 'app-charts-list',
  templateUrl: './charts-list.component.html',
  styleUrls: ['./charts-list.component.css']
})
export class ChartsListComponent implements OnInit {
  charts = [];

  constructor(private chartService : ChartService) { }

  ngOnInit() {
    this.charts = this.chartService.getCharts();
  }

}
