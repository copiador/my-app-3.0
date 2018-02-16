import { Component, Input, OnChanges} from '@angular/core';
import { NgModule }       from '@angular/core';
import { FormBuilder, FormGroup, Validators  }    from '@angular/forms';

//cliente serviço
import {UsuarioService} from './../../service/usuario.service';
import {ValidationService} from './../../service/validator.service';
import {MaskServices} from './../../service/mask.services';
//modelo
import {UsuarioModel, constTipoUsuarios} from './../../model/usuario.model';
import { SistemaService } from 'app/service/sistema.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { SistemaModel } from 'app/model/sistema.model';
@Component({

    selector: 'usuario-cadastrar',
    templateUrl: './usuario.cadastrar.html'

})


export class UsuarioCadastrar implements OnChanges, OnInit {

   public maskCpf : any = '';

    public maskTelefoneCelular: any = '';
    arrayTipoUsuario = constTipoUsuarios; // constante dos dados do select
    usuarioForm : FormGroup;
    usuario = new UsuarioModel(); // cliente para um novo cadastro
    sistemas : SistemaModel[];
    @Input() usuarioEditar : UsuarioModel; // cliente para um cadastro para editar
    
  

     constructor( private usuarioService: UsuarioService, private fb: FormBuilder, 
        private maskServices: MaskServices, private sistemasService: SistemaService) {
       
  
        this.maskCpf = this.maskServices.maskCpf();
    
        this.maskTelefoneCelular = this.maskServices.maskTelefoneCelular();
    
        this.createFormBuild();
        
        
  }

  ngOnInit(){

    this.sistemasService.getSistemas().subscribe(sistemas => this.sistemas = sistemas)

  }





createFormBuild(){

    this.usuarioForm = this.fb.group({
        _id: '',
        email: ['',[Validators.required]], 
        senha: ['',[Validators.required]],
        nome: ['',[Validators.required]],
        tipo: ['',[Validators.required]],
        ativacao: [''],
        sistema:[''],
        
        
    });

};

//prepara valores para serem cadastrados ;
prepararValores(): UsuarioModel{
   // let valores = this.usuarioForm.value;
    let usuario = new UsuarioModel();
  
    usuario.email = this.usuarioForm.controls.email.value;
    usuario.nome = this.usuarioForm.controls.nome.value;
    usuario.senha = this.usuarioForm.controls.senha.value;
    usuario.tipo = this.usuarioForm.controls.tipo.value;
    usuario.sistema = this.usuarioForm.controls.sistema.value;

  // this.cliente.cpf = this.clienteForm.controls.cpf.value;


   
   return usuario;
};
//submete os valores para o banco de dados depois de preparados
onSubmit(){

    let usuario = this.prepararValores();
    
    if(usuario._id === ''|| usuario._id === null || usuario._id === undefined){
        console.log(usuario);
        this.usuarioService.adicionarUsuario(usuario).subscribe(usuario => console.log(usuario));
    }
    
    
}

//imprementa ngOnChages para os dados vindos do "editar"
ngOnChanges(){
    this.usuarioForm.reset(
        {_id: this.usuarioEditar._id,
        email: this.usuarioEditar.email,
        senha: this.usuarioEditar.senha,
        nome: this.usuarioEditar.nome,
        tipo: this.usuarioEditar.tipo,
        ativacao: this.usuarioEditar.ativacao,
    
   

    })
}

verificaCampos(campo: string): boolean{

    if (!this.usuarioForm.get(campo).valid && (this.usuarioForm.get(campo).touched ||
     this.usuarioForm.get(campo).dirty)){
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



