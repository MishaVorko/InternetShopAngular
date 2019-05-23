import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from '../home/home-page.component';
import {ProductsComponent} from '../products/products.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'products', component: ProductsComponent}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRouterModule { }
