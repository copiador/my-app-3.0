import { Component, Input, OnChanges} from '@angular/core';
import { NgModule }       from '@angular/core';
import { FormBuilder, FormGroup, Validators  }    from '@angular/forms';

//cliente serviço
import {ClienteService} from './../../service/cliente.service';
import {ValidationService} from './../../service/validator.service';
import {MaskServices} from './../../service/mask.services';
//modelo
import {ClienteModel} from './../../model/cliente.model';
import {UsuarioModel} from './../../model/usuario.model';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { LoginService } from 'app/service/login.service';








@Component({

    selector: 'cliente-cadastrar',
    templateUrl: './clientes.cadastrar.html'



})


export class ClientesCadastrar implements OnChanges, OnInit {


    
      
   public maskCpf : any = '';
    public maskCep : any = '';
    public maskNumero: any = '';
    public maskTelefoneFixo: any ='';
    public maskTelefoneCelular: any = '';

    clienteForm : FormGroup;
    cliente = new ClienteModel(); // cliente para um novo cadastro
    @Input() clienteEditar : ClienteModel; // cliente para um cadastro para editar
    //pega o usuario logado
    usuario: UsuarioModel;
    
  

     constructor( private clienteService: ClienteService, private fb: FormBuilder, 
        private maskServices: MaskServices,private loginService: LoginService) {
       
  
        this.maskCpf = this.maskServices.maskCpf();
        this.maskCep = this.maskServices.maskCep();
        this.maskNumero = this.maskServices.maskNumero();
        this.maskTelefoneFixo = this.maskServices.maskTelefoneFixo();
        this.maskTelefoneCelular = this.maskServices.maskTelefoneCelular();
    
        this.createFormBuild();
        
        
  }



ngOnInit(){
    this.loginService.getUsuarioLogin().subscribe(usuario => this.usuario = usuario)
}

createFormBuild(){

    this.clienteForm = this.fb.group({
        _id: '',
        nome: ['',[Validators.required,Validators.maxLength(30)]], 
        cpf: ['',[Validators.required,ValidationService.cpfValidator]],
        rua: ['',Validators.required],
        bairro: ['',Validators.required],
        numero: ['',Validators.required],
        cidade: ['',Validators.required],
        estado: ['',Validators.required],
        cep: ['',Validators.required],
        email: [''],
        telefoneFixo: [''],
        telefoneCelular: ['',Validators.required],
        informacoes:['']
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
   cliente.rua = this.clienteForm.controls.rua.value;
   cliente.bairro = this.clienteForm.controls.bairro.value;
   cliente.numero = this.clienteForm.controls.numero.value;
   cliente.cidade = this.clienteForm.controls.cidade.value;
   cliente.estado = this.clienteForm.controls.estado.value;
   cliente.cep = this.clienteForm.controls.cep.value;
   cliente.email = this.clienteForm.controls.email.value;
   cliente.telefoneFixo = this.clienteForm.controls.telefoneFixo.value;
   cliente.telefoneCelular = this.clienteForm.controls.telefoneCelular.value;
   cliente.informacoes = this.clienteForm.controls.informacoes.value;
   //o cliente quando é cadastrado cria um debito de 0 reais
   cliente.debitoDoCliente = 0;
   //pega o usuario e do sistema e cadastra do sistema que ele pertense aos seus clientes
   cliente.sistema = this.usuario.sistema;

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
    this.clienteForm.reset({_id: this.clienteEditar._id, 
        nome: this.clienteEditar.nome, 
        cpf: this.clienteEditar.cpf,
        rua:  this.clienteEditar.rua,
        bairro:  this.clienteEditar.bairro,
        numero:  this.clienteEditar.numero,
        cidade:  this.clienteEditar.cidade,
        estado:  this.clienteEditar.estado,
        cep:  this.clienteEditar.cep,
        email:  this.clienteEditar.email,
        telefoneFixo:  this.clienteEditar.telefoneFixo,
        telefoneCelular:  this.clienteEditar.telefoneCelular,
        informacoes:  this.clienteEditar.informacoes

    })
}

verificaCampos(campo: string): boolean{

    if (!this.clienteForm.get(campo).valid && (this.clienteForm.get(campo).touched ||
     this.clienteForm.get(campo).dirty)){
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



