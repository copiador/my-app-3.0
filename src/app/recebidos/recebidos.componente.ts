import { Component, Input, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm  }    from '@angular/forms';
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
import { LoginService } from 'app/service/login.service';
import { UsuarioModel } from 'app/model/usuario.model';


@Component({

    selector: '',
    templateUrl: './recebidos.componente.html'


})

export class RecebidosComponente implements OnInit {

    
    clientes: ClienteModel[];
    clienteSelected: ClienteModel;
   
    //filter//
    values: string;
    //lista de vendas do cliente selecionado
    vendasAvistaModel: VendasAvistaModel[];
    //selecionar a venda do cliente
    vendasAvistaSelected: VendasAvistaModel;
    produtosSelected2: ProdutoModel[] = [];
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
   //recebido adicionado    
    recebido = new RecebidosModel();
    // usuario logado
     usuario: UsuarioModel;

    constructor(private serviceCliente:  ClienteService, 
        private vendasAVistaService: VendasAvistaService,
        private serviceProduto: ProdutoService,
        private recebidosService: RecebidosService,
        private loginService : LoginService){

    }

    ngOnInit(){
        this.loginService.getUsuarioLogin().subscribe(usuario => this.usuario = usuario);
        this.serviceCliente.getClientes(this.usuario.sistema._id).subscribe(clientes => this.clientes = clientes);
        this.serviceProduto.getProdutos(this.usuario.sistema._id).subscribe(produtos => this.produtos = produtos);
       

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
        this.produtosSelected = venda.produtos;
     
    }

    //função que recebe o um valor;
    recebidoFunction(valorRecebido: number){

     
       //adiciona um recebido ao modelo de recebido no bd
        let recebido = new RecebidosModel();
        recebido.cliente = this.clienteSelected;
        recebido.valor = valorRecebido;
        //a diciona um o id do sistema ao recebido
        console.log(this.usuario.sistema._id);
        recebido.sistema = this.usuario.sistema;

        console.log(recebido.sistema._id);
        this.recebidosService.adicionarRecebido(recebido).subscribe();
        
        //atualiza do debito do cliente 
        let clienteAtualizado = new ClienteModel();
        clienteAtualizado = this.clienteSelected;
        clienteAtualizado.debitoDoCliente = clienteAtualizado.debitoDoCliente - valorRecebido;
        this.serviceCliente.atualizarCliente(clienteAtualizado).subscribe();
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
          

            somaValoresRecebidos += recebido.valor;

        })

        this.totalValorRecebidoCliente = somaValoresRecebidos;

    }

    
    



}

