import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm  }    from '@angular/forms';

import { CommonModule }   from '@angular/common';
// Componentes Vendas
import {VendasComponente} from './vendas.componente';
import {TemplateModalComponente} from './template.modal.componente'
import {MenuPrincipalModule} from '../menu-principal/menu-principal.module'



// serviço
import {VendasAvistaService} from '../service/vendas-a-vista.service';
import {ClienteService} from '../service/cliente.service';
//rotas
import {VendasRouter} from './vendas.router';
//pipes e filtros
import {FilterClienteComponente} from './filter.cliente.componente';
import {FilterProdutoComponente} from './filter.produto.componente';
//modal
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VendasRouter,
    ReactiveFormsModule,
    ModalModule.forRoot(),
  
   
   
    
  ],
  declarations: [
    VendasComponente,// Componente de vendas
    FilterClienteComponente,
    TemplateModalComponente,
    FilterProdutoComponente,
    

    
 
    
  ],
  providers: [VendasAvistaService, ClienteService]
})

export class VendasModule { }
