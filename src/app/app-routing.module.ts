import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component'
import { SourceInfoComponent } from './source-info/source-info.component'
import { ProcessInfoComponent } from './process-info/process-info.component'
import { LogisticsInfoComponent } from './logistics-info/logistics-info.component'
import { ProductQueryComponent } from './product-query/product-query.component'
import { ProductInfoComponent } from './product-info/product-info.component'
import { HistoryInfoComponent } from './history-info/history-info.component'

const routes: Routes = [
  { path: '', redirectTo: '/homepage', pathMatch: 'full' },
  { path: 'homepage' , component: MenuComponent },
  { path : 'source', component: SourceInfoComponent},
  { path: 'process', component: ProcessInfoComponent},
  { path: 'logistics', component: LogisticsInfoComponent},
  { path: 'productInfos' ,component: ProductQueryComponent},
  { path: 'productInfo/:id' , component: ProductInfoComponent},
  { path: 'historyInfo/:id', component: HistoryInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
