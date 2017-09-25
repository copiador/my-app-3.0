import { Component,Input} from '@angular/core';



@Component({

    selector: 'campo-erro-componente',
    templateUrl: './campo.erro.componente.html',
  
 


})


export class CampoErroComponente{

    
    @Input()  testeErro : boolean;
    @Input()  menssagemErro: string;


}