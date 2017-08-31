import { Component, Input, OnInit } from '@angular/core';
//serviços
import {VendasAvistaService} from '../service/vendas-a-vista.service';
import {ProdutoService} from '../service/produto.service';
import {ClienteService} from '../service/cliente.service';
//Model
import {VendasAvistaModel} from '../model/vendas-a-vista.model';
import {ProdutoModel} from '../model/produto.model';
import {ClienteModel} from '../model/cliente.model';

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
    clientes: ClienteModel[];
    clienteSelected: ClienteModel;
    values: string; // valores para buscar
    //butão pra mostrar lista de clientes e fechar lista
    listarClienteButton: boolean = true;
    



    constructor(private serviceVendas: VendasAvistaService,
         private produtoService: ProdutoService, private clienteService: ClienteService ){

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
   
    }


    finalizarVenda(){
       
        this.vendaAvista.valorTotalVenda = this.valorTotalFinal;
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


    onSelect(cliente: ClienteModel){
        this.clienteSelected = cliente;
        this.vendaAvista.cliente = this.clienteSelected;
        console.log(this.vendaAvista.cliente);

    }

    onKey(event: any){
        this.values = event.target.value;

    }

    listarClientes(){
        this.listarClienteButton = !this.listarClienteButton;
        this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    }
         
}


