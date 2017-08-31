import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
// Componentes Vendas
import {VendasComponente} from './vendas.componente';

// serviço
import {VendasAvistaService} from '../service/vendas-a-vista.service';
import {ClienteService} from '../service/cliente.service';
//rotas
import {VendasRouter} from './vendas.router';
//pipes e filtros
import {FilterClienteComponente} from './filter.cliente.componente';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VendasRouter
   
    
  ],
  declarations: [
    VendasComponente,// Componente de vendas
    FilterClienteComponente
    
 
    
  ],
  providers: [VendasAvistaService, ClienteService]
})

export class VendasModule { }
