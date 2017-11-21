import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//componentes
import { AppComponent } from './app.component';
import { LoginModuleComponent} from './login-module/login.module.component'
import { LoginComponente} from './login/login.componente'


//Modulo de Rotas
import {AppRotasModule} from './app.rotas.module';
import {LoginModuleRouter} from './login-module/login.module.router'
import {LoginRouter} from './login/login.router'
 

//Modulos
import {CrudsModule} from './cruds/cruds.module'; //crud

import {RelatoriosModule} from './relatorios/relatorios.module';
import {RecebidosModule} from './recebidos/recebidos.module';
import {MenuPrincipalModule} from './menu-principal/menu-principal.module'



//Serviços
import {ClienteService} from './service/cliente.service';
import {UsuarioService} from './service/usuario.service'





@NgModule({
   imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LoginModuleRouter,
    AppRotasModule, //Rotas
  
    CrudsModule, // Modulo Cruds
    RelatoriosModule, // modulo relatorio
    RecebidosModule,// recebidos module
    MenuPrincipalModule,
    LoginRouter

  

  ],
  declarations: [
    AppComponent,  
    LoginModuleComponent,
    LoginComponente
   

    

  ],
 
  providers: [ClienteService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
