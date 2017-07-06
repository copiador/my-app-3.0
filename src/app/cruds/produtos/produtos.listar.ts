import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//serviço
import {ProdutoService} from './../../service/produto.service';
//modelo
import {ProdutoModel} from './../../model/produto.model';
//rotas
import {Router, ActivatedRoute, Params } from '@angular/router';
import {CustomerEmailFilter} from './../crud.filter.pipe';


@Component({

    selector: '',
    templateUrl: './produtos.listar.html'


})

export class ProdutosListar implements OnInit {

produtos: ProdutoModel[];
produtoParaEditar: ProdutoModel;

constructor(private produtoservice: ProdutoService, private router: Router, private route: ActivatedRoute){};


ngOnInit(){

    this.produtoservice.getProdutos().subscribe(produtos => this.produtos = produtos);
    
}


delete(produto: ProdutoModel){
      
        this.produtoservice.deleteProduto(produto._id).subscribe(() => {this.produtos = this.produtos.filter(p => p !== produto)});
              
   //     this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    }

    editar(produto:ProdutoModel){
       this.router.navigate(['/cruds-nav-module/crud-nav-listar/produto-editar', produto._id]);
       
    }

}


