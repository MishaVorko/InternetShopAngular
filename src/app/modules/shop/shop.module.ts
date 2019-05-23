import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductsComponent} from './products/products.component';
import {HomePageComponent} from './home/home-page.component';
import {ShopRouterModule} from './shop-router/shop-router.module';

@NgModule({
  declarations: [
    ProductsComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    ShopRouterModule
  ]
})
export class ShopModule {
}
