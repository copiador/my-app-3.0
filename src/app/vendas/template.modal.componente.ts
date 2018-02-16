import {Component, OnInit, Output, EventEmitter,ViewChild} from '@angular/core';
//services
import {ProdutoService} from '../service/produto.service';
import {ProdutoModel} from '../model/produto.model';
import { ModalDirective } from 'ngx-bootstrap/modal';
import {LoginService} from '../service/login.service'
//usuario model
import {UsuarioModel} from '../model/usuario.model'

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
    //pega o usuario logado
    usuario: UsuarioModel

    constructor(
        private produtoServices: ProdutoService,
        private loginService: LoginService){

    }

ngOnInit(){
    this.loginService.getUsuarioLogin().subscribe(usuario => this.usuario = usuario);
    this.produtoServices.getProdutos(this.usuario.sistema._id).subscribe(produtos => this.produtos = produtos);

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