import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//componentes
import { AppComponent } from './app.component';
import { VendasComponente} from './vendas/vendas.componente'
import { RelatoriosComponente} from './relatorios/relatorios.componente';
import { LoginComponente} from './login/login.componente';

//Modulo de Rotas
import {AppRotasModule} from './app.rotas.module';
import {LoginRouterModule} from './login/login.router';

//Modulos
import {CrudsModule} from './cruds/cruds.module'; //crud

//Serviços
import {ClienteService} from './service/cliente.service';




@NgModule({
   imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRotasModule, //Rotas
    CrudsModule, // Modulo Cruds
    LoginRouterModule // login modulo
   
  ],
  declarations: [
    AppComponent,
    VendasComponente, // componente vendas
    RelatoriosComponente, // relatorios componente
    LoginComponente // login componente

 

  ],
 
  providers: [ClienteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
