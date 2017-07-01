import { Component, Input, OnChanges} from '@angular/core';
import { NgModule }       from '@angular/core';
import { FormsModule, FormBuilder, FormControl,FormGroup  }    from '@angular/forms';

//cliente serviço
import {ProdutoService} from './../../service/produto.service';
//modelo
import {ProdutoModel} from './../../model/produto.model';

@Component({

    selector: '',
    templateUrl: './produtos.cadastrar.html'


})

export class ProdutosCadastrar implements OnChanges {


    produtoForm : FormGroup;
    produto = new ProdutoModel(); // cliente para um novo cadastro
    @Input() produtoEditar : ProdutoModel; // cliente para um cadastro para editar

    constructor(private produtoService: ProdutoService, private fb: FormBuilder){
        this.createFormBuild();

    }
   



createFormBuild(){
    

    this.produtoForm = this.fb.group({
        _id: '',
        codigoBarras: '',
        nome: '',
        valor: '',
        quantidade: '',
    });

}


prepararValores(): ProdutoModel{
    let valores = this.produtoForm.value;
    let produto = new ProdutoModel();
  //  this.cliente.nome = this.clienteForm.controls.nome.value;    
  //  this.cliente.cpf = this.clienteForm.controls.cpf.value;
   produto._id = this.produtoForm.controls._id.value;
   produto.codigoBarras = this.produtoForm.controls.codigoBarras.value;
   produto.nome = this.produtoForm.controls.nome.value;
   produto.valor = this.produtoForm.controls.valor.value;
   produto.quantidade = this.produtoForm.controls.quantidade.value;
   return produto;
};
//submete os valores para o banco de dados depois de preparados
onSubmit(){

    let produto = this.prepararValores();
    
    
    console.log(produto);
   //buscar o cliente no banco de dados, se o id do cliente for igual ao id do cliente do editar, então editar, caso não cadastrar.
    this.produtoService.adicionarProduto(produto).subscribe();
    
}

//imprementa ngOnChages para os dados vindos do "editar"
ngOnChanges(){
    this.produtoForm.reset({_id: this.produtoEditar._id, nome: this.produtoEditar.nome, 
        codigoBarras: this.produtoEditar.codigoBarras, valor: this.produtoEditar.valor, quantidade: this.produtoEditar.quantidade })
}
}

