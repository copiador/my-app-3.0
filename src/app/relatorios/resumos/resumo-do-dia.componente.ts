import { Component, Input, OnInit } from '@angular/core';
//SERVIÇOS
import { RelatoriosService } from './../../service/relatorios.services';
import { ProdutoService } from './../../service/produto.service';
import { RecebidosService } from './../../service/recebidos.services';
import { ClienteService } from './../../service/cliente.service';
import { LoginService} from './../../service/login.service';
//model
import { VendasAvistaModel } from './../../model/vendas-a-vista.model';
import { ProdutoModel } from './../../model/produto.model';
import { RecebidosModel } from './../../model/recebidos.model';
import { ClienteModel } from './../../model/cliente.model';
import {UsuarioModel} from './../../model/usuario.model';



@Component({

    selector: '',
    templateUrl: './resumo-do-dia.componente.html'


})

export class ResumoDoDiaComponente implements OnInit {

    //lista todas as vendas
    vendasAvista: any[] = [];
    //lista de vendas selecionadas
    vendasSelected: VendasAvistaModel;
    //produtos selecionados
    produtosSelected: any[] = [];
    produtosSelected2: ProdutoModel[] = [];
    //lista de todos os produtos
    produtos: ProdutoModel[];
    //lista de todos produtos filtrados pela venda
    //Quando o usuario clica na lista de vendas, cada lista de vendas tem uma lista de produtos
    produtosFiltrados: ProdutoModel[] = [];
    //variavel que soma todos os valores das vendas do dia e posta da tela
    valorTotalVendasDoDia: number = 0;
    //* */recebidos relatorios*//*
    recebidosDoDia: any[];
    //clientes lista de clientes do servidor
    clientes: ClienteModel[] = [];
    //nome dos clientes recebido
    clientesRecebido: ClienteModel[] = [];
    //total dos valores recebidos
    totalDeRecebidos: number;
    //pega o usuario logado
    usuario: UsuarioModel


    constructor(private relatoriosService: RelatoriosService,
        private produtoService: ProdutoService,
        private recebidosService: RecebidosService,
        private clienteService: ClienteService,
        private loginService: LoginService) {


    }

    ngOnInit() {
        //pega a lista de vendas vinda do servidor
        this.loginService.getUsuarioLogin().subscribe(usuario => this.usuario = usuario)
        this.relatoriosService.getRelatorioVendasDoDia(this.usuario.sistema._id)
            .subscribe(vendasAVista => this.vendasAvista = vendasAVista, Error, () => {
                //codigo que pega as vendas do db e posta a soma de todas as vendas
                this.vendasAvista.forEach((venda) => {
                    
                    this.valorTotalVendasDoDia += venda.valorTotalVenda;

                })
            });
        //pega a lista de produtos do servidor
       // this.produtoService.getProdutos(this.usuario.sistema._id).subscribe(produtos => this.produtos = produtos);
        //pega lista de recebidos do dia
        this.relatoriosService.getRelatorioRecebidosDoDia(this.usuario.sistema._id)
            .subscribe(recebidos => this.recebidosDoDia = recebidos, Error, () => this.somaValoresRecebidos());




    }

    onSelect(vendasAvista: VendasAvistaModel) {
       //aparece na lista de produtos da venda

        this.vendasSelected = vendasAvista;
        
        this.produtosSelected2 = this.vendasSelected.produtos;
     

    }



    somaValoresRecebidos() {
        let valoresSomados: number = 0;

        this.recebidosDoDia.forEach((recebido) => {
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
   
    listarVendas2() {
        this.relatoriosService.getRelatorioVendasDoDia().subscribe(vendas => console.log(vendas));
    }
 */

}




