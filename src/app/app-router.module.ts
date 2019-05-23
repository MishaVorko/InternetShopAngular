import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserInitModule} from './modules/user-init/user-init.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: './modules/shop/shop.module#ShopModule'},
  // {path: 'shop/admin', loadChildren: './modules/shop-for-admin/shop-for-admin.module#ShopForAdminModule'},
  // {path: 'blog', loadChildren: './modules/blog/blog.module#BlogModule'},
  // {path: 'blog/admin', loadChildren: './modules/blog-for-admin/blog-for-admin.module#BlogForAdminModule'},
  {path: 'login', loadChildren: './modules/user-init/user-init.module#UserInitModule'}
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    UserInitModule
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule {
}
