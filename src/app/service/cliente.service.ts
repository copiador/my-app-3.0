import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//cliente model
import {ClienteModel} from '../model/cliente.model';


@Injectable()
export class ClienteService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private clientesUrl = 'http://localhost:3000/api/clientes';  // URL to web api

  constructor(private http: Http) { console.log("cliente service inicializado")}

  //getClientes(): Promise<ClienteModel[]> {
    //return this.http.get(this.clientesUrl)
      //         .toPromise()
        //       .then(response => response.json().data as ClienteModel[])
          //     .catch(this.handleError);
 // }


  getClientes(): Observable<ClienteModel[]> {
    console.log("cliente service inicializado 222")
    return this.http.get(this.clientesUrl).map(res => res.json()) ;
    // res => res.json()
  }

  getCliente(_id: number): Observable<ClienteModel[]>{
    var url = '${this.clientesUrl}/${_id}';
    return this.http.get(url).map(res => res.json());
  }

  
 
 adicionarCliente(cliente: ClienteModel): Observable<ClienteModel[]>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    let options = new RequestOptions({ headers: headers });
    console.log(cliente);
   
    
    return this.http.post(this.clientesUrl, cliente, options ).map(this.extractData);
  }

  deleteCliente(_id: number): Observable<ClienteModel[]>{
    
    var url = this.clientesUrl + "/" + _id;
    
    return this.http.delete(url).map(this.extractData);
  }

  atualizarCliente(cliente:ClienteModel): Observable<ClienteModel[]>{
    
    var url = this.clientesUrl;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.put(url,cliente,options).map(this.extractData);
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