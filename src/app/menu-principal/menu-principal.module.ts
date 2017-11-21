import { NgModule }       from '@angular/core';
import { FormsModule,NgForm }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
//componentes
import {MenuPrincipalComponente} from './menu-principal.componente';

//rotas
import {MenuPrincipalRouter} from './menu-principal.router';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
   
    MenuPrincipalRouter,
   

  ],
  declarations: [

   MenuPrincipalComponente,
  
    
  ],
  exports:[],
  providers: []
})

export class MenuPrincipalModule { }
