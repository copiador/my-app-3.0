import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// componentes
import {RelatoriosComponente} from './relatorios.componente';
import {EstoqueComponente} from './resumos/estoque.componente';
import {ResumoDoDiaComponente} from './resumos/resumo-do-dia.componente';
import {VendasComponente} from './resumos/vendas.componente';




const RelatoriosRoutes: Routes = [
  { path: '',  
  component: RelatoriosComponente,
    children:[{
        path: 'resumo-do-dia-componente',
        component: ResumoDoDiaComponente,
    },{
        path: 'vendas-componente',
        component: VendasComponente,
    },{
        path: 'estoque-componente',
        component: EstoqueComponente,
    }]
}];

@NgModule({
  imports: [
    RouterModule.forChild(RelatoriosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RelatoriosRouter { }
