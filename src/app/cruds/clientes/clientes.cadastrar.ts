import { Component, Input, OnChanges} from '@angular/core';
import { NgModule }       from '@angular/core';
import { FormsModule, FormBuilder, FormControl,FormGroup  }    from '@angular/forms';


//cliente serviço
import {ClienteService} from './../../service/cliente.service';
//modelo
import {ClienteModel} from './../../model/cliente.model';

@Component({

    selector: 'cliente-cadastrar',
    templateUrl: './clientes.cadastrar.html'


})

export class ClientesCadastrar implements OnChanges {

    clienteForm : FormGroup;
    cliente = new ClienteModel(); // cliente para um novo cadastro
    @Input() clienteEditar : ClienteModel; // cliente para um cadastro para editar
  

     constructor( private clienteService: ClienteService, private fb: FormBuilder) {
        this.createFormBuild();
        
    
  }


createFormBuild(){

    this.clienteForm = this.fb.group({
        _id: '',
        nome: '',
        cpf: '',
    });

};

//prepara valores para serem cadastrados ;
prepararValores(): ClienteModel{
    let valores = this.clienteForm.value;
    let cliente = new ClienteModel();
  //  this.cliente.nome = this.clienteForm.controls.nome.value;    
  //  this.cliente.cpf = this.clienteForm.controls.cpf.value;
   cliente._id = this.clienteForm.controls._id.value;
   cliente.nome = this.clienteForm.controls.nome.value;
   cliente.cpf = this.clienteForm.controls.cpf.value;
   return cliente;
};
//submete os valores para o banco de dados depois de preparados
onSubmit(){

    let cliente = this.prepararValores();
    
    
    console.log(cliente);
   //buscar o cliente no banco de dados, se o id do cliente for igual ao id do cliente do editar, então editar, caso não cadastrar.
    this.clienteService.adicionarCliente(cliente).subscribe();
    
}

//imprementa ngOnChages para os dados vindos do "editar"
ngOnChanges(){
    this.clienteForm.reset({_id: this.clienteEditar._id, nome: this.clienteEditar.nome, cpf: this.clienteEditar.cpf})
}


  

}


