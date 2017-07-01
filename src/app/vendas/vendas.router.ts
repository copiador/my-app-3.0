import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Rotas Vendas
import {VendasComponente} from './vendas.componente';



const VendasRoutes: Routes = [
  { path: '',  component: VendasComponente},
];

@NgModule({
  imports: [
    RouterModule.forChild(VendasRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class VendasRouter { }
