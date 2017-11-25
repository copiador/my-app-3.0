import { Component, Input, OnChanges} from '@angular/core';
import { NgModule }       from '@angular/core';
import { FormBuilder, FormGroup, Validators  }    from '@angular/forms';

//cliente serviço
import {SistemaService} from './../../service/sistema.service';
import {ValidationService} from './../../service/validator.service';
import {MaskServices} from './../../service/mask.services';
//modelo
import {SistemaModel} from './../../model/Sistema.model';








@Component({

    selector: '',
    templateUrl: './sistema.cadastrar.html'



})


export class SistemaCadastrar implements OnChanges {


    
      
   public maskCpf : any = '';

    public maskTelefoneCelular: any = '';

    sistemaForm : FormGroup;
    sistema = new SistemaModel(); // cliente para um novo cadastro
    @Input() sistemaEditar : SistemaModel; // cliente para um cadastro para editar
    
  

     constructor( private sistemaService: SistemaService, private fb: FormBuilder, 
        private maskServices: MaskServices) {
       
  
        this.maskCpf = this.maskServices.maskCpf();
    
        this.maskTelefoneCelular = this.maskServices.maskTelefoneCelular();
    
        this.createFormBuild();
        
        
  }





createFormBuild(){

    this.sistemaForm = this.fb.group({
        _id: '',
        responsavel: ['',[Validators.required,Validators.maxLength(30)]],
        cpfResponsavel: ['',[Validators.required,ValidationService.cpfValidator]],
        nomeSistema: ['',[Validators.required,Validators.maxLength(30)]], 
        telefoneCelular: ['',Validators.required],
        informacoes:['']
    });

};

//prepara valores para serem cadastrados ;
prepararValores(): SistemaModel{
    let valores = this.sistemaForm.value;
    let cliente = new SistemaModel();
  //  this.cliente.nome = this.clienteForm.controls.nome.value;    
  //  this.cliente.cpf = this.clienteForm.controls.cpf.value;


   
   return cliente;
};
//submete os valores para o banco de dados depois de preparados
onSubmit(){

    let cliente = this.prepararValores();
    
    
    console.log(cliente);
   //buscar o cliente no banco de dados, se o id do cliente for igual ao id do cliente do editar, então editar, caso não cadastrar.
    
    
}

//imprementa ngOnChages para os dados vindos do "editar"
ngOnChanges(){
    this.sistemaForm.reset({_id: this.sistemaEditar._id, 
        responsavel: this.sistemaEditar.responsavel,
        cpfResponsavel: this.sistemaEditar.cpfResponsavel,
        nome: this.sistemaEditar.nomeSistema,
        telefoneCelular: this.sistemaEditar.contatoResponsavel 

    })
}

verificaCampos(campo: string): boolean{

    if (!this.sistemaForm.get(campo).valid && (this.sistemaForm.get(campo).touched ||
     this.sistemaForm.get(campo).dirty)){
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



