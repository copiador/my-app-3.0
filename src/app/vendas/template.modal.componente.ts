import {Component, OnInit, Output, EventEmitter,ViewChild} from '@angular/core';
//services
import {ProdutoService} from '../service/produto.service';
import {ProdutoModel} from '../model/produto.model';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
 selector: 'modal-static',
 templateUrl: './template.modal.componente.html'
})
export class TemplateModalComponente implements OnInit {

    produtos: ProdutoModel[];
    values: any;
    @Output() codigoBarrasOutput = new EventEmitter();
    @ViewChild('lgModal') public lgModal:ModalDirective;
    public isModalShown:boolean = false;
   

    constructor(private produtoServices: ProdutoService){

    }

ngOnInit(){

    this.produtoServices.getProdutos().subscribe(produtos => this.produtos = produtos);

}

onKey(event: any){
    this.values = event.target.value;

}

copiarCodigo(codigoBarras: number){
    this.codigoBarrasOutput.emit(codigoBarras);
    this.lgModal.hide();

}

public hideModal():void {
    
  }




}