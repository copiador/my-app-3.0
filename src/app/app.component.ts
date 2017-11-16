import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

// serviços
import {LoginService} from './service/login.service';
//model
import {UsuarioModel} from './model/usuario.model';

import {LoginComponente} from './login/login.componente'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  menssagem : string;
  usuarioPrepararLogar = new UsuarioModel();// preparar usuario para logar
  usuario : UsuarioModel;
  menssagemLogar : string;
  



  login: LoginComponente;
  usuarios: UsuarioModel[];
 
  //pega o usuario logado da paga de login
  //usuario  = new UsuarioModel();
  
  
  constructor( 
    public loginService:LoginService, public router: Router){
    this.setMessage()
  }

  setMessage() {
    this.menssagem = 'Logando ' + (this.loginService.estadoLogin ? 'Dentro' : 'Saido');
  }

  entrar() {
    this.menssagem = 'Carregando o a entrada';
    this.loginService.logarUsuario(this.usuarioPrepararLogar).subscribe(usuario => this.usuario = usuario,
    (err:any) => console.log(err),()=> this.testarLogin());
    
 /*   */
  }

  testarLogin(){
    console.log(this.usuario.estado);
      if(this.usuario.estado){
          this.loginService.login().subscribe(() => {
            this.setMessage();
            if (this.loginService.estadoLogin) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
            let redirect = this.loginService.redirectUrl ? this.loginService.redirectUrl : '/cruds-nav-module';
            console.log(this.loginService.estadoLogin);
        // Redirect the user
            this.router.navigate([redirect]);
      }
    });

      }else{
          this.menssagemLogar = "usuario ou senha invalidos";
      }
        
  }

  sair() {
    this.loginService.logout();
    this.setMessage();
  }

  logar(){
    this.router.navigateByUrl('/cruds-nav-module');
  }
  
}

