import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//cliente model
import {ProdutoModel} from '../model/produto.model';
import {VendasAvistaModel} from '../model/vendas-a-vista.model'


@Injectable()
export class VendasAvistaService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private vendasAvistaUrl = 'http://localhost:3000/api/vendas';  
  private produtosUrl = 'http://localhost:3000/api/produtos'; // URL to web api

  constructor(private http: Http) { console.log(" service vendas a vista Inicializado")}



  getProdutos(): Observable<ProdutoModel[]> {
    
    return this.http.get(this.produtosUrl).map(res => res.json()) ;
   
  }

  getProduto(_id: number | string): Observable<ProdutoModel>{
    var url = this.produtosUrl + "/" + _id;
    return this.http.get(url).map(res => res.json());
  }


  getVendas(): Observable<VendasAvistaModel[]> {
    
   return this.http.get(this.produtosUrl).map(res => res.json()) ;
   
  }


  
 
 adicionarProduto(venda: VendasAvistaModel): Observable<VendasAvistaModel>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    let options = new RequestOptions({ headers: headers });
    console.log(venda);
   
    
    return this.http.post(this.vendasAvistaUrl, venda, options ).map(this.extractData);
  }

  /*

  deleteProduto(_id: number): Observable<ProdutoModel[]>{
    
    var url = this.produtosUrl + "/" + _id;
    
    return this.http.delete(url).map(this.extractData);
  }
*/
/*
  atualizarCliente(cliente:ProdutoModel): Observable<ProdutoModel[]>{
    
    var url = this.produtosUrl;
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    
    return this.http.put(url,cliente,options).map(this.extractData);
  }

*/
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