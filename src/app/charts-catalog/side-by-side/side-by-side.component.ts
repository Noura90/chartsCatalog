import { Component, OnInit } from '@angular/core';
import { ProductDetailsService } from 'src/app/services/productDetails.service';

@Component({
  selector: 'app-side-by-side',
  templateUrl: './side-by-side.component.html',
  styleUrls: ['./side-by-side.component.css']
})
export class SideBySideComponent implements OnInit {

  dataSource = [];
  title = '';
  subtitle = '';
  chartVisualRange = [0, 1000];

  constructor(private productDetailsService: ProductDetailsService) { }

  ngOnInit() {
    this.title = this.productDetailsService.getTitle();
    this.subtitle = this.productDetailsService.getSubtitle();
    this.dataSource = this.productDetailsService.getProductDetails();
  }

}
