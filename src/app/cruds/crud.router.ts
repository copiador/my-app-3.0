
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//compronentes crud
import {CrudNavTitulo} from './crud.nav.titulo';
import {CrudNavComponente} from './crud.nav.componente';
import {CrudNavComponente2} from './crud.nav.componente2';

//Cruds Clientes

import {ClientesListar} from './clientes/clientes.listar';
import {ClientesCadastrar} from './clientes/clientes.cadastrar';  
import {ProdutosListar} from './produtos/produtos.listar';
import {ProdutosCadastrar} from './produtos/produtos.cadastrar';
import {ClientesTeste} from './clientes/clientes.teste';


const CrudNav: Routes = [{

  path: '',
  component: CrudNavTitulo,
  children: [{
      path: 'crud-nav-listar',
      component: CrudNavComponente2,
      children:[{
        path: 'clientes-listar',
        component: ClientesListar,
      },{
        path: 'produtos-listar',
        component: ProdutosListar,
        children:[{
          path:'produto-editar',
          component:  ClientesTeste,
        }]

      }]
  },{
      path: 'crud-nav-cadastrar',
      component: CrudNavComponente,
      children:[{
        path: 'clientes-cadastrar',
        component: ClientesCadastrar
      },{
        path: 'produtos-cadastrar',
        component: ProdutosCadastrar
      }]
  }]
}]
      

    
@NgModule({
  imports: [
    RouterModule.forChild(CrudNav)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class CrudRouter { }

