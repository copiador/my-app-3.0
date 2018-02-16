
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
import {SistemaCadastrar} from './sistema/sistema.cadastrar'
import {SistemaListar} from './sistema/sistema.listar';
 
import {ProdutoEditar} from './produtos/produto.editar';
import { UsuarioListar } from 'app/cruds/usuario/usuario.listar';
import { UsuarioCadastrar } from 'app/cruds/usuario/usuario.cadastrar';


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
          path: ':id',
          component: ProdutoEditar,
        }]
      },{
        path: 'sistema-listar',
        component: SistemaListar,
      },{
        path: 'usuario-listar',
        component: UsuarioListar,
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
      },{
        path: 'sistema-cadastrar',
        component: SistemaCadastrar,
      },{
        path: 'usuario-cadastrar',
        component: UsuarioCadastrar
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

