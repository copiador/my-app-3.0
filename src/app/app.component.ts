import { Component,OnInit } from '@angular/core';
import {LoginComponente} from './login/login.componente'
import {UsuarioService} from './service/usuario.service'
import {LoginService} from './service/login.service';
import {UsuarioModel} from './model/usuario.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  login: LoginComponente;
  usuarios: UsuarioModel[];
  //pega o usuario logado da paga de login
  usuario  = new UsuarioModel();
  
  
  constructor(private usuarioService: UsuarioService, private loginService: LoginService ){
    
  }

  ngOnInit(){
  
  // this.usuario = this.login.getUsuario();
    
  }

  testaUsuario(): boolean{
    
    
    /*
    if(this.loginService.estadoLogin && this.usuario.tipo !== undefined){
      if(this.usuario.tipo === 'administrador'){
        return false;
      }else if(this.usuario.tipo === 'vendedor'){
        return true;
      }

    }

    */return false;
    
  }
  
  aplicaHiddenUsuario(){
    
  return {
    'hidden' : true,
  };
    
  }

  
}

