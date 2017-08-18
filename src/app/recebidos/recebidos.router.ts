import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Rotas Vendas
import {RecebidosComponente} from './recebidos.componente';




const RecebidosRoutes: Routes = [
  { path: '',  component: RecebidosComponente},
];

@NgModule({
  imports: [
    RouterModule.forChild(RecebidosRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RecebidosRouter { }
