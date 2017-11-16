import { NgModule }       from '@angular/core';
import { FormsModule,NgForm }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
// Componentes Recebidos
import {RecebidosComponente} from './recebidos.componente';

//modulo
import {MenuPrincipalModule} from '../menu-principal/menu-principal.module'


// serviço
import {RecebidosService} from '../service/recebidos.services';
import {ClienteService} from '../service/cliente.service';
import {VendasAvistaService} from '../service/vendas-a-vista.service';

//rotas
import {RecebidosRouter} from './recebidos.router';
//filter
import {FilterClienteRecebidosComponente} from './filter.cliente.recebidos.componente'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //rota
    RecebidosRouter,
    MenuPrincipalModule
   
    
  ],
  declarations: [

    // Componente de recebidos
    RecebidosComponente,
    FilterClienteRecebidosComponente,
    
    
  ],
  providers: [RecebidosService, ClienteService, VendasAvistaService]
})

export class RecebidosModule { }
