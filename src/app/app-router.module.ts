import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserInitModule} from './modules/user-init/user-init.module';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
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
export class AppRouterModule { }
