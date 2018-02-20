import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//cliente model

import {RecebidosModel} from '../model/recebidos.model'


@Injectable()
export class RecebidosService {

  private headers = new Headers({'Content-Type': 'application/json'});

  private recebidosUrl = 'http://localhost:3000/api/recebidos'; // URL to web api

  constructor(private http: Http) {}

 
 adicionarRecebido(recebido: RecebidosModel): Observable<RecebidosModel>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    let options = new RequestOptions({ headers: headers });
   
   
    
    return this.http.post(this.recebidosUrl, recebido, options).map(this.extractData);
  }

  listarRecebidosPeloIdCliente(idCliente: number): Observable<RecebidosModel[]>{
        var url = this.recebidosUrl + "/clienteId/" + idCliente;
    
        return this.http.get(url).map(res => res.json());
  }

  deleteRecebido(_id: number): Observable<RecebidosModel>{
    
    var url = this.recebidosUrl + "/" + _id;

    console.log(url);
    
    return this.http.delete(url).map(this.extractData);
  }

  getRecebidos(idSistema: number): Observable<RecebidosModel[]> {
    var url = this.recebidosUrl + "/" + idSistema;
    
    return this.http.get(url).map(res => res.json()) ;
   
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