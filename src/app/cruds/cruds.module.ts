import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule  }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
//menu (nav) componentes
import {CrudNavTitulo} from './crud.nav.titulo';
import {CrudNavComponente} from './crud.nav.componente';
import {CrudNavComponente2} from './crud.nav.componente2';

//Rotas
import {CrudRouter} from './crud.router'
//Cruds Cliente
import {ClientesListar} from './clientes/clientes.listar';
import {ClientesCadastrar} from './clientes/clientes.cadastrar';
import {ClientesTeste} from './clientes/clientes.teste';
//Crud Produtos
import {ProdutosListar} from './produtos/produtos.listar';
import {ProdutosCadastrar} from './produtos/produtos.cadastrar';
//serviços
import {ClienteService} from './../service/cliente.service';
import {ProdutoService} from './../service/produto.service';
//pipe
import {CustomerEmailFilter} from './crud.filter.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    CrudRouter,// rotas
    ReactiveFormsModule
  
    
  ],
  declarations: [
    CrudNavTitulo,
    CrudNavComponente, //crud nav
    CrudNavComponente2, // crud nav
    ClientesListar, // Crud Listar Clientes
    ClientesCadastrar, // Crud cadastar clientes
    ProdutosListar,//Produtos Listar
    ProdutosCadastrar,//Produtos Cadastrar
    CustomerEmailFilter, // pipe filtros para procurar na lista
    ClientesTeste
 
    
  ],
  providers: [ClienteService, ProdutoService]
})

export class CrudsModule { }
