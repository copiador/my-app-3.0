import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//cliente model
import {SistemaModel} from '../model/sistema.model';



@Injectable()
export class SistemaService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private sistemaUrl = 'http://localhost:3000/api/sistema';  // URL to web api

  

  constructor(private http: Http) {}

  //getClientes(): Promise<ClienteModel[]> {
    //return this.http.get(this.clientesUrl)
      //         .toPromise()
        //       .then(response => response.json().data as ClienteModel[])
          //     .catch(this.handleError);
 // }


  getSistemas(): Observable<SistemaModel[]> {

    return this.http.get(this.sistemaUrl).map(res => res.json()) ;
  
  }

  getSistema(_id: number): Observable<SistemaModel>{
    var url = this.sistemaUrl + "/" + _id;
    return this.http.get(url).map(res => res.json());
  }

  
 
 adicionarSistema(sistema: SistemaModel): Observable<SistemaModel>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    let options = new RequestOptions({ headers: headers });
    
   
    
    return this.http.post(this.sistemaUrl, sistema, options ).map(this.extractData);
  }
   


  deleteSistema(_id: number): Observable<SistemaModel>{
    
    var url = this.sistemaUrl + "/" + _id;
    
    return this.http.delete(url).map(this.extractData);
  }

  atualizarSistema(cliente:SistemaModel): Observable<SistemaModel>{
    
    var url = this.sistemaUrl;
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