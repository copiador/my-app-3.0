import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
// Componentes Vendas
import {VendasComponente} from './vendas.componente';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
   
    
  ],
  declarations: [
    VendasComponente,// Componente de vendas
 
    
  ],
  providers: []
})

export class VendasModule { }
