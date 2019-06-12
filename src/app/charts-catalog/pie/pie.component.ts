import { Component, OnInit } from '@angular/core';
import { SubventionService } from 'src/app/services/subventions.service';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
  title : string = '';
  datasource = [];

  constructor(private subventionService : SubventionService) { }

  ngOnInit() {
    this.title = this.subventionService.getTitle();
    this.datasource = this.subventionService.getSubventions();
  }

}
