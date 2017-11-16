import { NgModule }       from '@angular/core';
import { FormsModule,NgForm }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
//componentes
import {LoginModuleComponent} from './login.module.component';
//rotas
import {LoginModuleRouter} from './login.module.router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    LoginModuleRouter,

  ],
  declarations: [
    LoginModuleComponent,
   
    
  ],
  providers: []
})

export class LoginModuleModule { }
