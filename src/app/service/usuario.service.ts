import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//usuario
import {UsuarioModel} from '../model/usuario.model';


@Injectable()
export class UsuarioService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private usuariosUrl = 'http://localhost:3000/api/usuarios';  // URL to web api

  constructor(private http: Http) {}

  //getClientes(): Promise<UsuarioModel[]> {
    //return this.http.get(this.usuariosUrl)
      //         .toPromise()
        //       .then(response => response.json().data as UsuarioModel[])
          //     .catch(this.handleError);
 // }


  getUsuarios(): Observable<UsuarioModel[]> {

    return this.http.get(this.usuariosUrl).map(res => res.json()) ;
  
  }

  getUsuario(_id: any): Observable<UsuarioModel>{
    var url = this.usuariosUrl + "/" + _id;
    return this.http.get(url).map(res => res.json());
  }

  
 
 adicionarUsuario(usuario: UsuarioModel): Observable<UsuarioModel>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    let options = new RequestOptions({ headers: headers });
    
   
    
    return this.http.post(this.usuariosUrl, usuario, options ).map(this.extractData);
  }

  deleteUsuario(_id: number): Observable<UsuarioModel>{
    
    var url = this.usuariosUrl + "/" + _id;
    
    return this.http.delete(url).map(this.extractData);
  }

  atualizarUsuario(usuario:UsuarioModel): Observable<UsuarioModel>{
    
    var url = this.usuariosUrl;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.put(url,usuario,options).map(res => res.json());
  }


  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }

 
   
   private handleError(error: any): Promise<any> {
    console.error('Ocorreu um erro', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}