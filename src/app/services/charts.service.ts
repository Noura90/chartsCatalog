import { ProductDetailsService } from './productDetails.service';
import { SubventionService } from './subventions.service';
import { Injectable } from '@angular/core';

class Chart {
    titleMin: string;
    title : string;
    type : string;
    createdOn: Date;
}

@Injectable()
export class ChartService {

    constructor(private productDetailService: ProductDetailsService,
        private subventionService: SubventionService){}

   

    charts : Chart[] = [
        {"titleMin" : this.productDetailService.getTitleMin() ,
        "title":this.productDetailService.getTitle()+ this.productDetailService.getSubtitle(),
         "type": "sideByside",
        "createdOn": new Date(2019,1,1)},
        {"titleMin" : this.subventionService.getTitleMin() ,
        "title":this.subventionService.getTitle()+ this.subventionService.getSubtitle(),
         "type": "pie",
         "createdOn": new Date(2019,1,1)}
    ];

    getCharts(){
 
        return this.charts.slice();
        
    }

}