import { Component, Input, OnInit } from '@angular/core';
//SERVIÇOS
import {RelatoriosService} from './../../service/relatorios.services';
//model
import {VendasAvistaModel} from './../../model/vendas-a-vista.model';



@Component({

    selector: '',
    templateUrl: './resumo-do-dia.componente.html'


})

export class ResumoDoDiaComponente implements OnInit {

    vendasAvista: VendasAvistaModel;



    constructor(private relatoriosService : RelatoriosService){

    }

    ngOnInit(){

        this.relatoriosService.getRelatorioVendas()
        .subscribe(vendasAVista => this.vendasAvista = vendasAVista);
        console.log(this.vendasAvista);

    }


}

