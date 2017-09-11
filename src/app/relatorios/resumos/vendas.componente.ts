import { Component, Input, OnInit } from '@angular/core';

//SERVIÇOS
import {RelatoriosService} from './../../service/relatorios.services';
import {ProdutoService} from './../../service/produto.service';
import {RecebidosService} from './../../service/recebidos.services';
import {VendasAvistaService} from './../../service/vendas-a-vista.service';
//model
import {VendasAvistaModel} from './../../model/vendas-a-vista.model';
import {ProdutoModel} from './../../model/produto.model';
import {RecebidosModel} from './../../model/recebidos.model';

@Component({

    selector: '',
    templateUrl: './vendas.componente.html'


})

export class VendasComponente implements OnInit {


    //lista todas as vendas
    vendasAvista: VendasAvistaModel[] = [];
    //lista de vendas selecionadas
    vendasSelected : VendasAvistaModel;
    //produtos selecionados
    produtosSelected: any[] = [];
    //lista de todos os produtos
    produtos: ProdutoModel[];
    //lista de todos produtos filtrados pela venda
    //Quando o usuario clica na lista de vendas, cada lista de vendas tem uma lista de produtos
    produtosFiltrados: ProdutoModel[] = [];
    //variavel que soma todos os valores das vendas do dia e posta da tela
    valorTotalVendasDoDia : number = 0;
    //recebidos model lista de recebidos
    recebidos: RecebidosModel[];
    // output data
    dataSelected: string;


    


   constructor(private relatoriosService : RelatoriosService, 
        private produtoService: ProdutoService,
        private recebidosService: RecebidosService,
        private vendasAvistaService: VendasAvistaService){

           
    }



    ngOnInit(){
        //pega a lista de vendas vinda do servidor
       
        //pega a lista de produtos do servidor
        this.produtoService.getProdutos().subscribe(produtos => this.produtos = produtos);
        this.recebidosService.getRecebidos().subscribe(recebidos => this.recebidos = recebidos);
        this.vendasAvistaService.getVendas().subscribe(vendas => this.vendasAvista = vendas);

    }

    onSelect(vendasAvista: VendasAvistaModel){
        //iniciaza as variaveis das lista com 0, para que quando o usuario clicar 2 vezes zerar tudo
       this.produtosSelected.length = 0;
        this.produtosFiltrados.length = 0;
       
        //pega a lista de venda clica do usuario
      
       this.vendasSelected = vendasAvista;
      
       //coloca a lista de vendas selecionados e coloca dentro de um array de produtos selecionados
        this.vendasSelected.produtos.forEach((value, index)=>{
         // console.log(_id._id);
            this.produtosSelected.push(value);
           
       });

      
       //pega a lista de venda clicada pelo usuario, junto da lista de vendas vindas do bd
       //e compara os produtos clicados pelo usuario com a lista de produtos vindo do bd
      this.produtosSelected.forEach((value2, index)=>{
            console.log(value2);
            this.produtos.forEach((value,index)=>{
                if(value2 == value._id){
                   this.produtosFiltrados.push(value);
                }
            })
      })
     }

     deleteVenda(venda: VendasAvistaModel){
         let idVenda = venda._id;
        this.relatoriosService.deleteVenda(idVenda)
        .subscribe(() => {this.vendasAvista = this.vendasAvista.filter(v => v !== venda)});

     }
     deleteRecebido(recebido: RecebidosModel){

        this.recebidosService.deleteRecebido(recebido._id)
        .subscribe(()=>{this.recebidos = this.recebidos.filter(r => r !== recebido)});

     }

     modificaData(data: string){
        console.log("evento ok", data);
       
        this.dataSelected = data;

        
     }

     buscarData(){


       //  let data2: {data:string};
        // data2.data = this.dataSelected;
        
        this.relatoriosService.getRelatorioVendasPelaData(this.dataSelected)
        .subscribe(vendas => this.vendasAvista = vendas,
        Error,()=>{});
         
     }
     

}

