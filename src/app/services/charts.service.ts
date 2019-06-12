import { ProductDetailsService } from './productDetails.service';
import { SubventionService } from './subventions.service';
import { Injectable } from '@angular/core';

class Chart {
    titleMin: string;
    title : string;
    type : string;
}

@Injectable()
export class ChartService {

    constructor(private productDetailService: ProductDetailsService,
        private subventionService: SubventionService){}

   

    charts : Chart[] = [
        {"titleMin" : this.productDetailService.getTitleMin() ,
        "title":this.productDetailService.getTitle()+ this.productDetailService.getSubtitle(),
         "type": "sideByside"},
        {"titleMin" : this.subventionService.getTitleMin() ,
        "title":this.subventionService.getTitle()+ this.subventionService.getSubtitle(),
         "type": "pie"}
    ];

    getCharts(){
 
        return this.charts.slice();
        
    }

}