import {Component, OnInit} from '@angular/core';
//services
import {ProdutoService} from '../service/produto.service';
import {ProdutoModel} from '../model/produto.model';

@Component({
 selector: 'modal-static',
 templateUrl: './template.modal.componente.html'
})
export class TemplateModalComponente implements OnInit {

    produtos: ProdutoModel[];
    values: any;


    constructor(private produtoServices: ProdutoService){

    }

ngOnInit(){

    this.produtoServices.getProdutos().subscribe(produtos => this.produtos = produtos);

}

onKey(event: any){
    this.values = event.target.value;

}

copiarCodigo(){
    
}




}