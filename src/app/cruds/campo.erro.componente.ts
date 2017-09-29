import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ValidationService } from '../service/validator.service';



@Component({

    selector: 'campo-erro-componente',
    templateUrl: './campo.erro.componente.html',
  
 


})


export class CampoErroComponente{

    
 

    @Input() control: FormControl;

    

    constructor() { }

    
    get errorMessage() {
        for (let propertyName in this.control.errors) {
          if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
            return ValidationService.getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
          }
        }
        
        return null;
      }


}