import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//cliente model
import {ProdutoModel} from '../model/produto.model';
import {VendasAvistaModel} from '../model/vendas-a-vista.model'
import {ClienteModel} from '../model/cliente.model'


@Injectable()
export class VendasAvistaService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private vendasAvistaUrl = 'http://localhost:3000/api/vendas';  
  private produtosUrl = 'http://localhost:3000/api/produtos'; // URL to web api

  constructor(private http: Http) { console.log(" service vendas a vista Inicializado")}





 


  getVendas(idSistema: number): Observable<VendasAvistaModel[]> {
    var url = this.vendasAvistaUrl + "/" + idSistema;
   return this.http.get(url).map(res => res.json()) ;
   
  }


  
 
 adicionarVenda(venda: VendasAvistaModel): Observable<VendasAvistaModel>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    let options = new RequestOptions({ headers: headers });
    
   
    
    return this.http.post(this.vendasAvistaUrl, venda, options ).map(this.extractData);
  }


  listarVendasIdCliente(_id: Number): Observable<VendasAvistaModel[]>{
  
    var url = this.vendasAvistaUrl + "/cliente/" + _id;

    return this.http.get(url).map(res => res.json());
  }

  
  buscarVendaId(_id: Number): Observable<VendasAvistaModel>{
  
    var url = this.vendasAvistaUrl + "/" + _id;

    return this.http.get(url).map(res => res.json());
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