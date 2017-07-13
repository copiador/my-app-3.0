import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
// Componentes Vendas
import {VendasComponente} from './vendas.componente';
// serviço
import {VendasAvistaService} from '../service/vendas-a-vista.service';
//rotas
import {VendasRouter} from './vendas.router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    VendasRouter
   
    
  ],
  declarations: [
    VendasComponente,// Componente de vendas
 
    
  ],
  providers: [VendasAvistaService]
})

export class VendasModule { }
