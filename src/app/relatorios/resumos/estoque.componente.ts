import { Component, Input, OnInit } from '@angular/core';
//serviços
import {ProdutoService} from './../../service/produto.service';
//
import {ProdutoModel, constRelatorioProdutos} from './../../model/produto.model';
import {UsuarioModel} from './../../model/usuario.model';
import { LoginService } from 'app/service/login.service';

@Component({

    selector: '',
    templateUrl: './estoque.componente.html'


})

export class EstoqueComponente implements OnInit {

    listaProdutos: ProdutoModel[];
    arrayRelatorioProdutos = constRelatorioProdutos;
    //pega o valor o id do select
    valueSelect: any;
    usuario : UsuarioModel;

    constructor(
        private produtoService: ProdutoService,
        private loginService: LoginService){

    }

    ngOnInit(){
        this.loginService.getUsuarioLogin().subscribe(usuario => this.usuario = usuario);
        this.produtoService.getProdutos(this.usuario.sistema._id).subscribe(produtos => this.listaProdutos = produtos);

    }
    

}

