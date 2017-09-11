import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
// Componentes Vendas
import {RelatoriosComponente} from './relatorios.componente';
import {EstoqueComponente} from './resumos/estoque.componente';
import {ResumoDoDiaComponente} from './resumos/resumo-do-dia.componente';
import {VendasComponente} from './resumos/vendas.componente';
import {DataPickComponent} from './data-pick.componente';
// serviço
import {RelatoriosService} from  '../service/relatorios.services';
import {ProdutoService} from '../service/produto.service';

//rotas
import{RelatoriosRouter} from './relatorios.router';
//pipe estoque
import {EstoquePipe} from './resumos/estoque.pipe'

import { DatepickerModule } from 'ngx-bootstrap';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RelatoriosRouter,
   DatepickerModule.forRoot(),
    
   
   
    
  ],
  declarations: [
    RelatoriosComponente,// Relatorios componente
    ResumoDoDiaComponente,
    EstoqueComponente,
    VendasComponente,
    EstoquePipe,
    DataPickComponent
    
    
  ],
  providers: [RelatoriosService, ProdutoService]
})

export class RelatoriosModule { }
