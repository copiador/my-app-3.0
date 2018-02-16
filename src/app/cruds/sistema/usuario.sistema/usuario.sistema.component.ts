import { Component, Input, OnChanges } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//model
import { UsuarioModel, constTipoUsuarios } from './../../../model/usuario.model';
import { SistemaModel } from './../../../model/sistema.model'
import { SistemaService } from './../../../service/sistema.service';
import { UsuarioService } from './../../../service/usuario.service';
import { constRelatorioProdutos } from 'app/model/produto.model';


@Component({

    selector: 'usuario-sistema-cadastrar',
    templateUrl: './usuario.sistema.component.html'



})


export class UsuarioSistemaCadastrar implements OnChanges {
    @Input() idsistema : number;
    arrayTipoUsuario = constTipoUsuarios; // constante dos dados do select
    usuarioForm: FormGroup;
    usuario = new UsuarioModel(); // usuario para um novo cadastro
    usuarioEditar = new UsuarioModel; // cliente para um cadastro para editar



    constructor(private sistemaService: UsuarioService, 
        private fb: FormBuilder,
        private usuarioService: UsuarioService,
    ) {



        this.createFormBuild();


    }





    createFormBuild() {

        this.usuarioForm = this.fb.group({
            _id: '',
            emailUsuario: ['', [Validators.required, Validators.maxLength(30)]],
            senhaUsuario: ['', [Validators.required]],
            nomeUsuario: ['', [Validators.required, Validators.maxLength(30)]],
            tipoUsuario: ['', [Validators.required]],
            ativacaoUsuario: ['', [Validators.required]],


        });

    };

    //prepara valores para serem cadastrados ;
    prepararValores(): UsuarioModel {
        // let valores = this.sistemaForm.value;
        let usuario = new UsuarioModel();
       // usuario._id = this.usuarioForm.controls._id.value;
        usuario.email = this.usuarioForm.controls.emailUsuario.value;
        usuario.senha = this.usuarioForm.controls.senhaUsuario.value;
        usuario.nome = this.usuarioForm.controls.nomeUsuario.value;
        usuario.tipo = this.usuarioForm.controls.tipoUsuario.value;
        //pega o valor string e converte para bollean
        let ativacao = Boolean(this.usuarioForm.controls.ativacaoUsuario.value);
        usuario.ativacao = ativacao;
        //pegao o id o sitema vindo da lista
    
       


        return usuario;
    };
    //submete os valores para o banco de dados depois de preparados
    onSubmit() {

      

    }

    //imprementa ngOnChages para os dados vindos do "editar"
    ngOnChanges() {
        this.usuarioForm.reset({
            _id: this.usuarioEditar._id,
            emailUsuario: this.usuarioEditar.email,
            senhaUsuario: this.usuarioEditar.senha,
            nomeUsuario: this.usuarioEditar.nome,



        })
    }

    verificaCampos(campo: string): boolean {

        if (!this.usuarioForm.get(campo).valid && (this.usuarioForm.get(campo).touched ||
            this.usuarioForm.get(campo).dirty)) {
            return true;
        } else {
            return false;
        }

    }

    aplicaCssErro(campo: string) {
        return {
            'has-error': this.verificaCampos(campo),
        };

    }


}