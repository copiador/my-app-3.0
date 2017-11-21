import { Component, Input } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute, ParamMap }      from '@angular/router';

import {LoginModuleComponent} from '../login-module/login.module.component'
import {UsuarioModel} from '../model/usuario.model'
import {UsuarioService} from '../service/usuario.service';

@Component({

    selector: 'menu-principal',
    templateUrl: './menu-principal.componente.html',
    styleUrls: ['./menu-principal.componente.css']


})

export class MenuPrincipalComponente {

    usuario: UsuarioModel;
    id: any;

    constructor(private activedRouter: ActivatedRoute, private usuarioService: UsuarioService){
    this.id = this.activedRouter.snapshot.paramMap.get('id')     
    
    }

    teste(){
       
    }
}


