import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideBySideComponent } from './charts-catalog/side-by-side/side-by-side.component';
import { ProductDetailsService } from './services/productDetails.service';
import { DevExtremeModule} from 'devextreme-angular';
import { PieComponent } from './charts-catalog/pie/pie.component';
import { SubventionService } from './services/subventions.service';
import { ChartsListComponent } from './charts-list/charts-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SideBySideComponent,
    PieComponent,
    ChartsListComponent
  ],
  imports: [
    BrowserModule,
    DevExtremeModule
  ],
  providers: [ProductDetailsService, SubventionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
