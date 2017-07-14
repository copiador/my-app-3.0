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
    valorTotalFinal : Number;
   



    constructor(private serviceVendas: VendasAvistaService){

    }
    //pega a lista do servidor
    ngOnInit(){
        this.serviceVendas.getProdutos().subscribe(produtos => this.produtos = produtos);
        
    }
   //pega o valor tde todos os produtos da venda soma todos
    valorTotal(){
        let valorProduto : number;
        let valorTotal: number = 0;
     
        this.produtosVendidos.forEach((value, index)=> {
            let produto = new ProdutoModel();
                produto = value; 
                valorProduto = produto.valor;
                valorTotal = valorTotal + valorProduto;  
         })
         //coloca o valor total das vendas na variavel global
    this.valorTotalFinal = valorTotal;

     
    }
   
    //coloca o codigo de barrras vindo e cadastra na tela
    venda(codigoDeBarras : Number){
     let produtoFilter = this.produtos.findIndex(produto => produto.codigoBarras == codigoDeBarras) ;
     let produtoVendido = this.produtos[produtoFilter];
    // this.produtosVendidos.push(produtoVendido);
    //console.log(produtoVendido.valor);
   
     this.produtosVendidos.push(produtoVendido);
     //chama a função de somar todos os produtos da venda   
     this.valorTotal();
     
     //    this.clienteService.deleteCliente(cliente._id).subscribe
        //  (() => {this.clientes = this.clientes.filter(c => c !== cliente)});
    }

    

}

