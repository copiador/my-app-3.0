import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//componentes
import { AppComponent } from './app.component';
import { VendasComponente} from './vendas/vendas.componente'
import { RelatoriosComponente} from './relatorios/relatorios.componente';
import { LoginComponente} from './login/login.componente';
//componente prar buscar cliente


//Modulo de Rotas
import {AppRotasModule} from './app.rotas.module';
import {LoginRouterModule} from './login/login.router';

//Modulos
import {CrudsModule} from './cruds/cruds.module'; //crud
import {VendasModule} from './vendas/vendas.module';//vendas
import {RelatoriosModule} from './relatorios/relatorios.module';
import {RecebidosModule} from './recebidos/recebidos.module';



//Serviços
import {ClienteService} from './service/cliente.service';
import {UsuarioService} from './service/usuario.service'





@NgModule({
   imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRotasModule, //Rotas
    VendasModule, // vendas modulo
    CrudsModule, // Modulo Cruds
    LoginRouterModule, // login modulo
    RelatoriosModule, // modulo relatorio
    RecebidosModule,// recebidos module
  

  ],
  declarations: [
    AppComponent,
    LoginComponente, // login componente
    

  ],
 
  providers: [ClienteService, UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
