import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//serviço
import {ClienteService} from './../../service/cliente.service';
import { LoginService } from 'app/service/login.service';
//modelo
import {ClienteModel} from './../../model/cliente.model';
import {UsuarioModel} from './../../model/usuario.model';
//rotas
import {Router, ActivatedRoute, Params } from '@angular/router';




@Component({

    selector: '',
    templateUrl: './clientes.listar.html',
  
 


})

//<hero-detail [hero]="selectedHero"></hero-detail>
export class ClientesListar implements OnInit {
    //listar
    clientes: ClienteModel[];
    values: string;
    errorMessage: string;
    //editar
    clienteParaEditar: ClienteModel;
    usuario: UsuarioModel;
   
   
    constructor(private clienteService: ClienteService, private router: Router, 
        private loginService: LoginService){}
    //name para ng model para filtro
     
    ngOnInit() {
        this.loginService.getUsuarioLogin().subscribe(usuario => this.usuario = usuario)
        this.clienteService.getClientes(this.usuario.sistema._id).subscribe(clientes => this.clientes = clientes.slice(1,10), 
        error => this.errorMessage = <any> error);
       // clientes que vem do bd já vão estar nessa lista.
       
    }
    delete(cliente: ClienteModel){
        console.log(cliente._id);
        this.clienteService.deleteCliente(cliente._id).subscribe(() => {this.clientes = this.clientes.filter(c => c !== cliente)});
              
   //     this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    }

    editar(cliente:ClienteModel){
        this.clienteParaEditar = cliente;
       
    }


    onKey(event: any) { // without type info
    this.values = event.target.value;
  }
    

}




