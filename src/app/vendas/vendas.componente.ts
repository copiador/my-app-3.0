import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, NgForm  }    from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute }      from '@angular/router';
//serviços
import {VendasAvistaService} from '../service/vendas-a-vista.service';
import {ProdutoService} from '../service/produto.service';
import {ClienteService} from '../service/cliente.service';
import {LoginService} from '../service/login.service';

//Model
import {VendasAvistaModel} from '../model/vendas-a-vista.model';
import {ProdutoModel} from '../model/produto.model';
import {ClienteModel} from '../model/cliente.model';
import {UsuarioModel} from '../model/usuario.model';

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
    
    produto = new ProdutoModel();

    usuario: UsuarioModel;
    



    constructor(private serviceVendas: VendasAvistaService,
         private produtoService: ProdutoService, 
         private clienteService: ClienteService,
         private activedRouter: ActivatedRoute,
         private loginService: LoginService,  ){

    }
    //pega a lista do servidor
    ngOnInit(){
        this.loginService.getUsuarioLogin().subscribe(usuario => this.usuario = usuario)
        this.produtoService.getProdutos(this.usuario.sistema._id).subscribe(produtos => this.produtos = produtos);
      //  let id = this.activedRouter.snapshot.paramMap.get('id') 
        //console.log(id);
        //pega o usuario da tela do menu
        
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
    venda(codigoBarras : number){
        
    this.validaProduto(codigoBarras);
    let produtoFilter = this.produtos.findIndex(produto => produto.codigoBarras == codigoBarras) ;
   
        
     //pega a lista vinda do servidor, e filtra o produto de acordo com o codigo de barras  
     //essa variavel produtoFilter anexa o codigo de barras do produto vendido 
    
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
//ver se existe um produto valido quando é digitado um codigo de barras
    validaProduto(codigoBarras : number){
        if(codigoBarras == undefined){
            return true;
        }else{
            let produtoFilter = this.produtos.findIndex(produto => produto.codigoBarras == codigoBarras) ;
            
            let produtoVendido = this.produtos[produtoFilter];
            if(produtoFilter == -1){
               
                return true;
            }else{
                return false;
            }
        }
     
    }
    //valida se tem algum item na lista
    validaVenda(){
       
        if(this.produtosVendidos.length > 0){
          
            return false;
        }else{
            return true;
        }
    }

    //finaliza a venda atualizando o valor total da venda e colocando o id do sistema
    finalizarVenda(){
       
        //testa se a venda foi a vista  ou a praso;
        if(this.vendaAvista.tipo === undefined || 
            this.vendaAvista.tipo === ''){
            this.vendaAvista.tipo = "Venda a vista"
        }
        this.vendaAvista.valorTotalVenda = this.valorTotalFinal;
        //pega o usuario do sitema.
        this.vendaAvista.sistema = this.usuario.sistema
        this.serviceVendas.adicionarVenda(this.vendaAvista).subscribe();
        //zera a lista da venda
        this.produtosVendidos.length = 0;
        this.vendaAvista.produtos.length = 0;
        // zera a venda efetuada
        this.valorTotalFinal = 0;
       
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
    //almenta o estoque depois que o usuario deleta do estoque 
    aumentaEstoque(produto: ProdutoModel){

        //a atualiza o estoque a cada produto tirado da venda
        let produtoAtualizado = new ProdutoModel();
        produtoAtualizado = produto;
        produtoAtualizado.quantidade = produtoAtualizado.quantidade +1;
        this.produtoService.atualizarProduto(produtoAtualizado).subscribe();
          
    }

    //pega o cliente selecionado
    onSelect(cliente: ClienteModel){
        this.clienteSelected = cliente;
        this.vendaAvista.cliente = this.clienteSelected;
        this.vendaAvista.tipo = "Venda a praso - Cliente: "+ this.clienteSelected.nome ;
        

    }
    //detecta os valores digitados pelo usuario no campo cliente e filtra eles pelo pipe
    onKey(event: any){
        this.values = event.target.value;

    }

    listarClientes(){
        this.listarClienteButton = !this.listarClienteButton;
        this.clienteService.getClientes(this.usuario.sistema._id).subscribe(clientes => this.clientes = clientes);
    }
    //copia codigo de barras vindo da lista de produtos  do tempalte modal
    copiarCodigoBarras(codigoBarras: number){
        
        this.produto.codigoBarras = codigoBarras;
    }
    //detecta uma ação do usuario caso fique com produtos na lista 
    canDeactivate(): Observable<boolean> | boolean {
        // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
        if (this.validaVenda()) {
          return true;
        }else{
            window.alert("Para sair no menu delete os produtos da lista de produtos");
        }

     
        
       
      }
         
        

      
}


