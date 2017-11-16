import { NgModule }       from '@angular/core';
import { FormsModule, ReactiveFormsModule  }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
//menu (nav) componentes
import {CrudNavTitulo} from './crud.nav.titulo';
import {CrudNavComponente} from './crud.nav.componente';
import {CrudNavComponente2} from './crud.nav.componente2';
import {CampoErroComponente} from './campo.erro.componente';

//Rotas
import {CrudRouter} from './crud.router'
//Cruds Cliente
import {ClientesListar} from './clientes/clientes.listar';
import {ClientesCadastrar} from './clientes/clientes.cadastrar';
import {ClientesTeste} from './clientes/clientes.teste';
//Crud Produtos
import {ProdutosListar} from './produtos/produtos.listar';
import {ProdutosCadastrar} from './produtos/produtos.cadastrar';
import {ProdutoEditar} from './produtos/produto.editar';
//serviços
import {ClienteService} from './../service/cliente.service';
import {ProdutoService} from './../service/produto.service';
import {MaskServices} from './../service/mask.services';
//pipe
import {CrudFilterClientePipe} from './crud.filter.cliente.pipe';
//boots trap
import { TextMaskModule } from 'angular2-text-mask';
//modulos
import {MenuPrincipalModule} from '../menu-principal/menu-principal.module'





@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    CrudRouter,// rotas
    ReactiveFormsModule,
    TextMaskModule,
    MenuPrincipalModule

    
  ],
  declarations: [
    CrudNavTitulo,
    CrudNavComponente, //crud nav
    CrudNavComponente2, // crud nav
    ClientesListar, // Crud Listar Clientes
    ClientesCadastrar, // Crud cadastar clientes
    ProdutosListar,//Produtos Listar
    ProdutosCadastrar,//Produtos Cadastrar
    ProdutoEditar,//produto editar
    CrudFilterClientePipe, // pipe filtros para procurar na lista
    ClientesTeste,
    CampoErroComponente
 
    
  ],

  providers: [ClienteService, ProdutoService,MaskServices]
})

export class CrudsModule { }
