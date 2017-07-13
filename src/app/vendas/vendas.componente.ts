import { Component, Input, OnInit } from '@angular/core';
//serviços
import {VendasAvistaService} from '../service/vendas-a-vista.service';
//Model
import {VendasAvistaModel} from '../model/vendas-a-vista.model';
import {ProdutoModel} from '../model/produto.model';

@Component({

    selector: '',
    templateUrl: './vendas.componente.html'


})

export class VendasComponente implements OnInit {

    produtos: ProdutoModel[];
    vendas : VendasAvistaModel;
    produtosVendidos = [];



    constructor(private serviceVendas: VendasAvistaService){

    }

    ngOnInit(){
        this.serviceVendas.getProdutos().subscribe(produtos => this.produtos = produtos);
        
    }

    venda(codigoDeBarras : Number){
     let produtoFilter = this.produtos.findIndex(produto => produto.codigoBarras == codigoDeBarras) ;
     let produtoVendido = this.produtos[produtoFilter];
    // this.produtosVendidos.push(produtoVendido);
     this.produtosVendidos.push(produtoVendido);
     console.log(produtoVendido);  
     console.log(this.produtos[produtoFilter]);   
     console.log(this.produtosVendidos);
     
     
     //    this.clienteService.deleteCliente(cliente._id).subscribe
        //  (() => {this.clientes = this.clientes.filter(c => c !== cliente)});
    }

}

