import { Component, Input, OnInit } from '@angular/core';
//SERVIÇOS
import {RelatoriosService} from './../../service/relatorios.services';
import {ProdutoService} from './../../service/produto.service';
import {RecebidosService} from './../../service/recebidos.services';
import {ClienteService} from './../../service/cliente.service';
//model
import {VendasAvistaModel} from './../../model/vendas-a-vista.model';
import {ProdutoModel} from './../../model/produto.model';
import {RecebidosModel} from './../../model/recebidos.model';
import {ClienteModel} from './../../model/cliente.model';



@Component({

    selector: '',
    templateUrl: './resumo-do-dia.componente.html'


})

export class ResumoDoDiaComponente implements OnInit {

    //lista todas as vendas
    vendasAvista: any[] = [];
    //lista de vendas selecionadas
    vendasSelected : VendasAvistaModel;
    //produtos selecionados
    produtosSelected: any[] = [];
    produtosSelected2: ProdutoModel[] = [];
    //lista de todos os produtos
    produtos: ProdutoModel[];
    //lista de todos produtos filtrados pela venda
    //Quando o usuario clica na lista de vendas, cada lista de vendas tem uma lista de produtos
    produtosFiltrados: ProdutoModel[] = [];
    //variavel que soma todos os valores das vendas do dia e posta da tela
    valorTotalVendasDoDia : number = 0;
    //* */recebidos relatorios*//*
    recebidosDoDia: any[];
    //clientes lista de clientes do servidor
    clientes: ClienteModel[] = [];
    //nome dos clientes recebido
    clientesRecebido: ClienteModel[] = [];
    //total dos valores recebidos
    totalDeRecebidos: number;




    constructor(private relatoriosService : RelatoriosService, 
        private produtoService: ProdutoService,
        private recebidosService: RecebidosService,
        private clienteService: ClienteService ){

           
    }

    ngOnInit(){
        //pega a lista de vendas vinda do servidor
        this.relatoriosService.getRelatorioVendasDoDia()
        .subscribe(vendasAVista => this.vendasAvista = vendasAVista,Error,()=>{
            //codigo que pega as vendas do db e posta a soma de todas as vendas
            this.vendasAvista.forEach((venda)=>{
                this.valorTotalVendasDoDia += venda.valorTotalVenda;
                
            })
        });
        //pega a lista de produtos do servidor
        this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
        //pega lista de recebidos do dia
        this.relatoriosService.getRelatorioRecebidosDoDia()
        .subscribe(recebidos => this.recebidosDoDia = recebidos,Error,()=> this.somaValoresRecebidos());




    }

    onSelect(vendasAvista: VendasAvistaModel){
        //iniciaza as variaveis das lista com 0, para que quando o usuario clicar 2 vezes zerar tudo
       this.produtosSelected.length = 0;
        this.produtosFiltrados.length = 0;
       
        //pega a lista de venda clica do usuario
      
       this.vendasSelected = vendasAvista;
       this.produtosSelected2 = this.vendasSelected.produtos;
     
     }


  
     somaValoresRecebidos(){
        let valoresSomados : number = 0;

        this.recebidosDoDia.forEach((recebido)=>{
            valoresSomados += recebido.valor;
            
        })
        this.totalDeRecebidos = valoresSomados;
      
     }
/*
     listarNomesClientes(){
        this.vendasAvista.map((value)=>{
            this.clientes.forEach((cliente)=>{
                if(value.cliente == cliente._id){
                    value.cliente = cliente.nome;
                }
                if (value.cliente === undefined || value.cliente === null) {
                    value.cliente = "Venda a Vista";
                }
            })
        })
        this.listarNomesRecebidos();

    }
     
     listarNomesRecebidos(){
         this.recebidosDoDia.map((value)=>{
             this.clientes.forEach((cliente)=>{
                if(value.cliente == cliente._id){
                    value.cliente= cliente.nome;
                }
            })
         })
     }
*/
     listarVendas2(){
         this.relatoriosService.getRelatorioVendasDoDia().subscribe(vendas => console.log(vendas));
     }
    

}

  
          

   