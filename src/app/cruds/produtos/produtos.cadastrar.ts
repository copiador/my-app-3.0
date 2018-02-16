import { Component, Input, OnChanges} from '@angular/core';
import { NgModule }       from '@angular/core';
import { FormsModule, FormBuilder, FormControl,FormGroup , Validators  }    from '@angular/forms';

//cliente serviço
import {ProdutoService} from './../../service/produto.service';
import {ValidationService} from './../../service/validator.service';
import {MaskServices} from './../../service/mask.services';
import {LoginService} from './../../service/login.service';
//modelo
import {ProdutoModel} from './../../model/produto.model';
import {UsuarioModel} from './../../model/usuario.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({

    selector: 'produto-cadastrar',
    templateUrl: './produtos.cadastrar.html'


})

export class ProdutosCadastrar implements OnChanges, OnInit {



    produtoForm : FormGroup;
    produto = new ProdutoModel(); // cliente para um novo cadastro
    @Input() produtoEditar : ProdutoModel; // cliente para um cadastro para editar
    usuario: UsuarioModel;
    constructor(private produtoService: ProdutoService, private fb: FormBuilder,
    private loginService: LoginService){
        this.createFormBuild();
    

    }
   

ngOnInit(){
    this.loginService.getUsuarioLogin().subscribe(usuario => this.usuario = usuario);
}

createFormBuild(){
    

    this.produtoForm = this.fb.group({
        _id: '',
        codigoBarras: ['',Validators.required],
        nome: ['', Validators.required ],
        valor: ['',Validators.required],
        quantidade: '',
    });

}



prepararValores(): ProdutoModel{
  
    let produto = new ProdutoModel();
  //  this.cliente.nome = this.clienteForm.controls.nome.value;    
  //  this.cliente.cpf = this.clienteForm.controls.cpf.value;
   produto._id = this.produtoForm.controls._id.value;
   produto.codigoBarras = this.produtoForm.controls.codigoBarras.value;
   produto.nome = this.produtoForm.controls.nome.value;
   produto.valor = this.produtoForm.controls.valor.value;
   produto.quantidade = this.produtoForm.controls.quantidade.value;
   produto.sistema = this.usuario.sistema;
   
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

verificaCampos(campo: string): boolean{
    
        if (!this.produtoForm.get(campo).valid && (this.produtoForm.get(campo).touched ||
         this.produtoForm.get(campo).dirty)){
            return true;
        }else{
            return false;
        }
    
    }
    
    aplicaCssErro(campo: string){
        return{
            'has-error': this.verificaCampos(campo),
        };
        
    }
}

