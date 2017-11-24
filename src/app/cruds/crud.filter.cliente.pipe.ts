import { Pipe, PipeTransform } from '@angular/core';
import { ClienteModel } from './../model/cliente.model';
import { ClienteService } from './../service/cliente.service';

import { Observable } from 'rxjs/Observable';


@Pipe({
  name: 'filter',
  pure: false
})

export class CrudFilterClientePipe implements PipeTransform {
  transform(clientes: ClienteModel[], args: any) {
    if (!clientes || !args) {
      return clientes;
    }
    return clientes.filter(cliente => cliente.nome.indexOf(args) !== -1);
  }
}

 //transform(items: any[], filter: string) {
   //  if (!items || !filter) {
     //       return items;
       // }
 // return items.filter(item => item.name.indexOf(filter) !== -1);