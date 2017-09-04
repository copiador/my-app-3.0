import { Component, Input, OnInit } from '@angular/core';
//serviços
import {ClienteService} from '../service/cliente.service';
import {VendasAvistaService} from '../service/vendas-a-vista.service';
import {ProdutoService} from '../service/produto.service';
import {RecebidosService} from '../service/recebidos.services';
//model
import {ClienteModel} from '../model/cliente.model';
import {VendasAvistaModel} from '../model/vendas-a-vista.model';
import {ProdutoModel} from '../model/produto.model';
import {RecebidosModel} from '../model/recebidos.model';

import { Observable } from 'rxjs/Observable';
@Component({

    selector: '',
    templateUrl: './recebidos.componente.html'


})

export class RecebidosComponente implements OnInit {

    
    clientes: ClienteModel[];
    clienteSelected: ClienteModel;
    cliente: Observable<ClienteModel>;
    //filter//
    values: string;
    //lista de vendas do cliente selecionado
    vendasAvistaModel: VendasAvistaModel[];
    //selecionar a venda do cliente
    vendasAvistaSelected: VendasAvistaModel;
    //produtos Service
    produtos: ProdutoModel[];
    //produtos selecidonados pela venda;
    produtosSelected: ProdutoModel[] = [];
    //total do valor das vendas do Cliente
    totalValorClienteVenda : number = 0;
    //total valor de recebido Cliente 
    totalValorRecebidoCliente: number = 0;
    //model
    recebidosCliente: RecebidosModel[];
   


    constructor(private serviceCliente:  ClienteService, 
        private vendasAVistaService: VendasAvistaService,
        private serviceProduto: ProdutoService,
        private recebidosService: RecebidosService){

    }

    ngOnInit(){

        this.serviceCliente.getClientes().subscribe(clientes => this.clientes = clientes);
        this.serviceProduto.getProdutos().subscribe(produtos => this.produtos = produtos);
       

    }


    //pega o cliente selecionado e pega as vendas dele
    onSelectCliente(cliente: ClienteModel){
        //reseta a lista de produtos quando seleciona outra cliente
        this.produtosSelected.length = 0;
        //pega o cliente selecionado e busca pelo id as vendas do cliente
        this.clienteSelected = cliente;
     
      
     
        this.vendasAVistaService.
        listarVendasIdCliente(this.clienteSelected._id)
        .subscribe(vendas => this.vendasAvistaModel = vendas, Error, ()=> this.somarValoresVenda())
        //pega a lista
        this.pegaListaRecebidosPeloId(this.clienteSelected);
        //soma os valores recebidos do cliente
  
        
        
        
    
    }

   

    onKey(event: any){
        this.values = event.target.value;

    }

    onSelectVenda(venda: VendasAvistaModel){
        this.vendasAvistaSelected = venda;

        //reseta a lista de produtos
        this.produtosSelected.length = 0;
      
        //pega a lista de vendas e mostra os produtos de cada venda
        this.vendasAvistaSelected.produtos.forEach((produto)=>{
           //pega o id do produto
            let numberidProduto: any = produto;
            this.produtos.forEach((value2)=>{
                if(numberidProduto == value2._id){
                    this.produtosSelected.push(value2);
                 
                }
            })
        })
        

    }

    //função que recebe o um valor;
    recebidoFunction(valorRecebido: number){

     
       //adiciona um recebido ao modelo de recebido no bd
        let recebido = new RecebidosModel();
        recebido.cliente = this.clienteSelected;
        recebido.valorRecebido = valorRecebido;
        this.recebidosService.adicionarRecebido(recebido).subscribe();
        
        //depois de acionar um recebido 
        let clienteAtualizado = new ClienteModel();
        clienteAtualizado = this.clienteSelected;
        clienteAtualizado.debitoDoCliente = clienteAtualizado.debitoDoCliente - valorRecebido;
        this.serviceCliente.atualizarCliente(clienteAtualizado)
        .subscribe();
        //atualizar lista recebidos
        this.pegaListaRecebidosPeloId(clienteAtualizado);
       
       
      
    }
    
    pegaListaRecebidosPeloId(cliente: ClienteModel){
        this.recebidosService.listarRecebidosPeloIdCliente(cliente._id)
        .subscribe(recebidos => this.recebidosCliente = recebidos,Error,
            ()=>{this.totalValorRecebidos()});

    }

    somarValoresVenda(){
        
        let valorTotal: number = 0;

        this.vendasAvistaModel.forEach((venda)=>{
            valorTotal += venda.valorTotalVenda;
        })

        this.totalValorClienteVenda = valorTotal;
       

    }

    totalValorRecebidos(){

        let somaValoresRecebidos : number = 0;
        this.recebidosCliente.forEach((recebido)=>{
          

            somaValoresRecebidos += recebido.valorRecebido;

        })

        this.totalValorRecebidoCliente = somaValoresRecebidos;

    }

    
    



}

