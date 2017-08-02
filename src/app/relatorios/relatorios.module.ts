import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
// Componentes Vendas
import {RelatoriosComponente} from './relatorios.componente';
import {EstoqueComponente} from './resumos/estoque.componente';
import {ResumoDoDiaComponente} from './resumos/resumo-do-dia.componente';
import {VendasComponente} from './resumos/vendas.componente';
// serviço
import {RelatoriosService} from  '../service/relatorios.services';
import {ProdutoService} from '../service/produto.service';

//rotas
import{RelatoriosRouter} from './relatorios.router';
//pipe estoque
import {EstoquePipe} from './resumos/estoque.pipe'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RelatoriosRouter
   
    
  ],
  declarations: [
    RelatoriosComponente,// Relatorios componente
    ResumoDoDiaComponente,
    EstoqueComponente,
    VendasComponente,
    EstoquePipe
    
    
  ],
  providers: [RelatoriosService, ProdutoService]
})

export class RelatoriosModule { }
