import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
//serviço
import { UsuarioService } from './../../service/usuario.service';
//modelo
import { UsuarioModel } from './../../model/usuario.model';




@Component({

    selector: '',
    templateUrl: './usuario.listar.html',


})


export class UsuarioListar implements OnInit {
    //listar
    usuarios: UsuarioModel[];
    values: string;
    errorMessage: string;
    //editar
    usuarioParaEditar: UsuarioModel;
    usuarioParaAdiconarusuario: UsuarioModel;
    usuarioParaEditarBollean = false;
    usuarioParaAdicionarusuarioBollean = false;



    constructor(private usuarioService: UsuarioService) { }
    //name para ng model para filtro

    ngOnInit() {
        this.usuarioService.getUsuarios().subscribe(usuarios => this.usuarios = usuarios)
        // clientes que vem do bd já vão estar nessa lista.

    }
    delete(usuario: UsuarioModel) {
        console.log(usuario._id);
        this.usuarioService.deleteUsuario(usuario._id).subscribe(() => { this.usuarios = this.usuarios.filter(u => u !== usuario) });

        //     this.clienteService.getClientes().subscribe(clientes => this.clientes = clientes);
    }

   

  


    onKey(event: any) { // without type info
        this.values = event.target.value;
    }


}




