import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

//Usuarios
import {UsuarioModel} from '../model/usuario.model';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class LoginService {
  estadoLogin: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  usuarioModel: UsuarioModel;

 private usuarioUrl = 'http://localhost:3000/api/login'; 

  constructor(private http: Http){}

  login(): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.estadoLogin = true);
  }

 logarUsuario(usuario: UsuarioModel): Observable<UsuarioModel>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    let options = new RequestOptions({ headers: headers });
    console.log(usuario.email);
   
    
    return this.http.post(this.usuarioUrl, usuario, options ).map(res => res.json());
  }

  //retorna o usuario vindo da tela menu como observador
  getUsuarioLogin(): Observable<UsuarioModel>{
    return Observable.of(this.usuarioModel);
  }
  //coloca o usuario dentro do serviço de login
  pushUsuarioLogin(usuario: UsuarioModel){
    this.usuarioModel = usuario;
    
  }

  logout(): void {
    this.estadoLogin = false;
  }

  private extractData(res: Response) {
    let body = res.json();
    
    return body.data || { };
  }
}