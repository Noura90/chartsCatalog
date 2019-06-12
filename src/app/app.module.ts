import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBySideComponent } from './charts-catalog/side-by-side/side-by-side.component';
import { ProductDetailsService } from './services/productDetails.service';
import { DevExtremeModule} from 'devextreme-angular';
import { PieComponent } from './charts-catalog/pie/pie.component';
import { SubventionService } from './services/subventions.service';
import { ChartsListComponent } from './charts-list/charts-list.component';
import { ChartService } from './services/charts.service';
import { ChartsCatalogComponent } from './charts-catalog/charts-catalog.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SideBySideComponent,
    PieComponent,
    ChartsListComponent,
    ChartsCatalogComponent
  ],
  imports: [
    BrowserModule,
    DevExtremeModule,
    AppRoutingModule
  ],
  providers: [ProductDetailsService, SubventionService, ChartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
