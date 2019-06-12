import { Routes, RouterModule, Router } from '@angular/router'
import { SideBySideComponent } from './charts-catalog/side-by-side/side-by-side.component';
import { PieComponent } from './charts-catalog/pie/pie.component';
import { ChartsCatalogComponent } from './charts-catalog/charts-catalog.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    {path: '', redirectTo:'/charts/sideByside', pathMatch: 'full'},
    {path: 'charts', component: ChartsCatalogComponent, children :  [
        {path: 'sideByside', component: SideBySideComponent},
        {path: 'pie', component : PieComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}