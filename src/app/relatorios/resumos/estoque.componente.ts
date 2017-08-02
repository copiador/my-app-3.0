import { Component, Input, OnInit } from '@angular/core';
//serviços
import {ProdutoService} from './../../service/produto.service';
//
import {ProdutoModel, constRelatorioProdutos} from './../../model/produto.model';

@Component({

    selector: '',
    templateUrl: './estoque.componente.html'


})

export class EstoqueComponente implements OnInit {

    listaProdutos: ProdutoModel[];
    arrayRelatorioProdutos = constRelatorioProdutos;
    //pega o valor o id do select
    valueVariavel: any;

    constructor(private produtoService: ProdutoService){

    }

    ngOnInit(){
        this.produtoService.getProdutos().subscribe(produtos => this.listaProdutos = produtos);

    }
    

}

