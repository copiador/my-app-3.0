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

//Crud Produtos
import {ProdutosListar} from './produtos/produtos.listar';
import {ProdutosCadastrar} from './produtos/produtos.cadastrar';
import {ProdutoEditar} from './produtos/produto.editar';

//crud sistema
import {SistemaListar} from './sistema/sistema.listar'
import {SistemaCadastrar} from './sistema/sistema.cadastrar'
//serviços
import {ClienteService} from './../service/cliente.service';
import {ProdutoService} from './../service/produto.service';
import {MaskServices} from './../service/mask.services';
import {UsuarioService} from './../service/usuario.service'
import { SistemaService } from 'app/service/sistema.service';
//crud usuarios
import { UsuarioListar } from 'app/cruds/usuario/usuario.listar';
import { UsuarioCadastrar } from 'app/cruds/usuario/usuario.cadastrar';
//pipe
import {CrudFilterClientePipe} from './crud.filter.cliente.pipe';

//boots trap
import { TextMaskModule } from 'angular2-text-mask';










@NgModule({
  imports: [
    CommonModule,
    FormsModule,  
    CrudRouter,// rotas
    ReactiveFormsModule,
    TextMaskModule,
   

    
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
    CampoErroComponente,//
    SistemaCadastrar,// crud sistema
    SistemaListar,  // crud sistema
    UsuarioListar,// listar usuarios crud
    UsuarioCadastrar// crud usuario
 
    
  ],

  providers: [
    ClienteService, 
    ProdutoService,
    MaskServices,
    UsuarioService,
    SistemaService,
  ]
})

export class CrudsModule { }
