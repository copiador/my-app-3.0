import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Rotas Vendas
import {LoginComponente} from './login.componente';
// guardas
import {LoginGuardaService} from '../service/login.guarda.service';
import {LoginService} from '../service/login.service';


const LoginRoutes: Routes = [
  { path: 'login-componente',  
  component: LoginComponente},
];

@NgModule({
  imports: [
    RouterModule.forChild(LoginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers:[
    LoginGuardaService,
    LoginService,
  ],


})
export class LoginRouter { }
