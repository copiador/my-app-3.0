import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Rotas Vendas
import {LoginModuleComponent} from './login.module.component';




const LoginModuleRoutes: Routes = [
  { path: '',  component: LoginModuleComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(LoginModuleRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginModuleRouter { }
