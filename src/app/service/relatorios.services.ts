
import { Injectable }              from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
//services
import {VendasAvistaService} from './vendas-a-vista.service';
import {ProdutoService} from './produto.service';

//cliente model
import {VendasAvistaModel} from '../model/vendas-a-vista.model';


@Injectable()
export class RelatoriosService {

    private headers = new Headers({'Content-Type': 'application/json'});
    private relatoriosVendasUrl = 'http://localhost:3000/api/relatorios/listarVendas';  // URL to web api


    constructor(private vendasService: VendasAvistaService, private produtosService: ProdutoService, private http: Http){

    }


  getRelatorioVendas(): Observable<VendasAvistaModel> {
    
    return this.http.get(this.relatoriosVendasUrl).map(res => res.json()) ;
   
  }

  


private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body.data || { };
  }
}