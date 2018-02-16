import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//serviço
import {SistemaService} from './../../service/sistema.service';
//modelo
import {SistemaModel} from './../../model/sistema.model';
//rotas
import {Router, ActivatedRoute, Params } from '@angular/router';




@Component({

    selector: '',
    templateUrl: './sistema.listar.html',
  
 
})


export class SistemaListar implements OnInit {
    //listar
    sistemas: SistemaModel[];
    values: string;
    errorMessage: string;
    //editar
    sistemaParaEditar: SistemaModel;
    idSistemaSistema: number;
    sistemaParaEditarBollean = false;
    sistemaParaAdicionarSistemaBollean = false;
    SistemaSistema = new SistemaModel(); // Sistema usado para se casatrado no sistema
  
   
   
    constructor(private sistemaService: SistemaService, private router: Router){}
    //name para ng model para filtro
     
    ngOnInit() {
      this.sistemaService.getSistemas().subscribe(sistemas => this.sistemas = sistemas)
       // clientes que vem do bd já vão estar nessa lista.
       
    }
    delete(sistema: SistemaModel){
        console.log(sistema._id);
        this.sistemaService.deleteSistema(sistema._id).subscribe(() => {this.sistemas = this.sistemas.filter(s => s !== sistema)});
              
   //     this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    }

    editar(sistema:SistemaModel){
        this.sistemaParaAdicionarSistemaBollean = false;
        this.sistemaParaEditarBollean = true;
        this.sistemaParaEditar = sistema;
       
    }

    adicionarSistema(sistema:SistemaModel){
        this.sistemaParaAdicionarSistemaBollean = true;
        this.sistemaParaEditarBollean = false;
        this.idSistemaSistema = sistema._id;

    }


    onKey(event: any) { // without type info
    this.values = event.target.value;
  }
    

}




