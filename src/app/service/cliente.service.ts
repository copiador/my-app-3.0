import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//cliente model
import {ClienteModel} from '../model/cliente.model';
import {SistemaModel} from '../model/sistema.model';



@Injectable()
export class ClienteService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private clientesUrl = 'http://localhost:3000/api/clientes';  // URL to web api
  private clienteUrl = 'http://localhost:3000/api/cliente'; 

  constructor(private http: Http) { console.log("cliente service inicializado")}

  //getClientes(): Promise<ClienteModel[]> {
    //return this.http.get(this.clientesUrl)
      //         .toPromise()
        //       .then(response => response.json().data as ClienteModel[])
          //     .catch(this.handleError);
 // }


  getClientes(_idSistema: number): Observable<ClienteModel[]> {

    var url = this.clientesUrl + "/" + _idSistema;
    return this.http.get(url).map(res => res.json()) ;
  
  }
  getClientes2(): Observable<ClienteModel[]> {
    
    return this.http.get(this.clientesUrl).map(res => res.json()) ;
  
  }

  getCliente(_id: number): Observable<ClienteModel>{
    var url = this.clienteUrl + "/" + _id;
    return this.http.get(url).map(res => res.json());
  }

  
 
 adicionarCliente(cliente: ClienteModel): Observable<ClienteModel[]>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    let options = new RequestOptions({ headers: headers });
    
   
    
    return this.http.post(this.clientesUrl, cliente, options ).map(this.extractData);
  }

  deleteCliente(_id: number): Observable<ClienteModel[]>{
    
    var url = this.clientesUrl + "/" + _id;
    
    return this.http.delete(url).map(this.extractData);
  }

  atualizarCliente(cliente:ClienteModel): Observable<ClienteModel>{
    
    var url = this.clientesUrl;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.put(url,cliente,options).map(res => res.json());
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