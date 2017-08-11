import { Component, Input, OnInit } from '@angular/core';
//serviços
import {VendasAvistaService} from '../service/vendas-a-vista.service';
import {ProdutoService} from '../service/produto.service';
//Model
import {VendasAvistaModel} from '../model/vendas-a-vista.model';
import {ProdutoModel} from '../model/produto.model';

import * as moment from 'moment';
import 'moment/locale/pt-br';




@Component({

    selector: '',
    templateUrl: './vendas.componente.html'


})

export class VendasComponente implements OnInit {

    produtos: ProdutoModel[];
    vendaAvista = new VendasAvistaModel();
    produtosVendidos = [];
   
    valorTotalFinal : number;
    



    constructor(private serviceVendas: VendasAvistaService, private produtoService: ProdutoService ){


        console.log(moment.locale()); // en

moment.locale('pt-BR');
console.log(moment.locale());
console.log("momento " + moment().format("MM,DD,YYYY , "));
console.log("momento " + moment().format("MMMM,DD,YYYY , HH:M:Ss"));
console.log(moment().format("dddd, MMMM Do YYYY, hh:mm:ss a")); // pt-BR
let momento = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a"); // pt-BR
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

     //pega a lista vinda do servidor, e filtra o produto de acordo com o codigo de barras  
     //essa variavel produtoFilter anexa o codigo de barras do produto vendido 
     let produtoFilter = this.produtos.findIndex(produto => produto.codigoBarras == codigoDeBarras) ;
     //coloca o produto vendido em um modelo de produto
     let produtoVendido = this.produtos[produtoFilter];
     
    // this.produtosVendidos.push(produtoVendido);
    //console.log(produtoVendido.valor);
   //adiciona em uma lista os produtos vendidos
     this.produtosVendidos.push(produtoVendido);
     //atualisar a o estoque
    this.diminueEstoque(produtoVendido);
    //prepara a venda para ser registrada no bando de dados
     this.vendaAvista.add(produtoVendido);
     //chama a função de somar todos os produtos da venda   e apresenta na tela
     this.valorTotal();
   
    
     
     //    this.clienteService.deleteCliente(cliente._id).subscribe
        //  (() => {this.clientes = this.clientes.filter(c => c !== cliente)});
    }


    finalizarVenda(){
        let momento = moment().format("dddd, MMMM Do YYYY, hh:mm:ss a"); // pt-BR
        let data = new Date();
        this.vendaAvista.valorTotalVenda = this.valorTotalFinal;
        
      //  this.vendaAvista.momento = momento;
       // this.vendaAvista.data = data;
        
     
        console.log(this.vendaAvista.valorTotalVenda);
        this.serviceVendas.adicionarVenda(this.vendaAvista).subscribe();
       
    }

    diminueEstoque(produto: ProdutoModel){

        //a atualiza o estoque a cada produto vendido
        let produtoAtualizado = new ProdutoModel();
        produtoAtualizado = produto;
        produtoAtualizado.quantidade = produtoAtualizado.quantidade -1;

            this.produtoService.atualizarProduto(produtoAtualizado).subscribe();
          
        }

        deleteVenda(produto: ProdutoModel){
            //pega o index do objeto e deleta o objeto da do array            
            let index = this.produtosVendidos.indexOf(produto);
            if (index > -1) {
                this.produtosVendidos.splice(index, 1);
                //a atualiza o estoque a cada produto tirado da venda
                this.aumentaEstoque(produto);
                //Atualiza o valor total da venda depois de tirado o produto da venda
                this.valorTotal();
            }
            
            
        }

        aumentaEstoque(produto: ProdutoModel){

        //a atualiza o estoque a cada produto tirado da venda
        let produtoAtualizado = new ProdutoModel();
        produtoAtualizado = produto;
        produtoAtualizado.quantidade = produtoAtualizado.quantidade +1;

            this.produtoService.atualizarProduto(produtoAtualizado).subscribe();
          
        }
  
    
}


