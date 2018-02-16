import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//serviço
import {ProdutoService} from './../../service/produto.service';
import {LoginService} from './../../service/login.service';
//modelo
import {ProdutoModel} from './../../model/produto.model';
import {UsuarioModel} from './../../model/usuario.model';
//rotas
import {Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({

    selector: '',
    templateUrl: './produtos.listar.html'


})

export class ProdutosListar implements OnInit {

produtos: ProdutoModel[];
//produtos: Observable<ProdutoModel[]>;
produtoParaEditar: ProdutoModel;
produtoEditarBollean = false;
usuario: UsuarioModel;

constructor(private produtoservice: ProdutoService, 
    private router: Router, 
    private route: ActivatedRoute,
    private loginService: LoginService){};


ngOnInit(){
    this.loginService.getUsuarioLogin().subscribe(usuario => this.usuario = usuario);
    this.produtoservice.getProdutos(this.usuario.sistema._id).subscribe(produtos => this.produtos = produtos);
   
    
}


delete(produto: ProdutoModel){
      
        this.produtoservice.deleteProduto(produto._id).subscribe(() => {this.produtos = this.produtos.filter(p => p !== produto)});
              
       //this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    }

editar(produto:ProdutoModel){
        this.produtoEditarBollean = true;
        this.produtoParaEditar = produto;
     //  this.router.navigate(['/cruds-nav-module/crud-nav-listar/produto-editar', produto._id]);
     // this.router.navigate([produto._id],{relativeTo: this.route});
   
    }

}


