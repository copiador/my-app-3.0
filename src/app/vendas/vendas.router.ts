import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Rotas Vendas
import {VendasComponente} from './vendas.componente';
import {CanDeactivateGuard} from '../service/can.deactivate.guard.service'


const VendasRoutes: Routes = [
  { path: '',  component: VendasComponente,
  canDeactivate: [CanDeactivateGuard],
},
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
