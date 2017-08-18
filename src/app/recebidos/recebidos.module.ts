import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
// Componentes Recebidos
import {RecebidosComponente} from './recebidos.componente';

// serviço
import {RecebidosService} from '../service/recebidos.services';

//rotas
import {RecebidosRouter} from './recebidos.router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    //rota
    RecebidosRouter 
   
    
  ],
  declarations: [

    // Componente de recebidos
    RecebidosComponente
    
  ],
  providers: [RecebidosService]
})

export class RecebidosModule { }
