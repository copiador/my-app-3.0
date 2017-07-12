import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

//cliente model
import {ProdutoModel} from '../model/produto.model';


@Injectable()
export class ProdutoService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private produtosUrl = 'http://localhost:3000/api/produtos';  // URL to web api

  constructor(private http: Http) { console.log("produtos service inicializado")}



  getProdutos(): Observable<ProdutoModel[]> {
    
    return this.http.get(this.produtosUrl).map(res => res.json()) ;
   
  }

  getProduto(_id: number | string): Observable<ProdutoModel>{
    var url = this.produtosUrl + "/" + _id;
    return this.http.get(url).map(res => res.json());
  }

  
 
 adicionarProduto(produto: ProdutoModel): Observable<ProdutoModel[]>{
    let headers = new Headers({ 'Content-Type': 'application/json' });
    
    let options = new RequestOptions({ headers: headers });
    console.log(produto);
   
    
    return this.http.post(this.produtosUrl, produto, options ).map(this.extractData);
  }

  deleteProduto(_id: number): Observable<ProdutoModel[]>{
    
    var url = this.produtosUrl + "/" + _id;
    
    return this.http.delete(url).map(this.extractData);
  }

  atualizarCliente(cliente:ProdutoModel): Observable<ProdutoModel[]>{
    
    var url = this.produtosUrl;
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