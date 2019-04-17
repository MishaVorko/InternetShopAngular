import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import {UserInitRouterModule} from './user-init-router/user-init-router.module';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserInitRouterModule,
    FormsModule
  ],
  exports: [
    LoginComponent
  ]
})
export class UserInitModule { }
