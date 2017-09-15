import {Pipe, PipeTransform} from '@angular/core';
import {ClienteModel} from '../../model/cliente.model';
import {ClienteService} from '../../service/cliente.service';


import { Observable } from 'rxjs/Observable';


@Pipe({
  name: 'filterClienteVenda',
  pure: false,
})


export class FilterClienteVendaComponente implements PipeTransform {
  

  
    transform(cliente: any, clientes: ClienteModel[]){
    
   console.log(cliente);
   console.log(clientes);
  }
}