import { Component, Input,OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute, ParamMap }      from '@angular/router';

import {LoginModuleComponent} from '../login-module/login.module.component'
import {UsuarioModel} from '../model/usuario.model'
import {UsuarioService} from '../service/usuario.service';

@Component({

    selector: 'menu-principal',
    templateUrl: './menu-principal.componente.html',
    styleUrls: ['./menu-principal.componente.css']


})

export class MenuPrincipalComponente implements OnInit {

    usuario = new UsuarioModel();
   



    constructor(private activedRouter: ActivatedRoute, private usuarioService: UsuarioService){
    
    
    }

    ngOnInit(){
        let id = this.activedRouter.snapshot.paramMap.get('id') 
        this.usuarioService.getUsuario(id).subscribe(usuario => this.usuario = usuario);
    }
}


