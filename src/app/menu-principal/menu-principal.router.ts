import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Rotas Vendas
import {MenuPrincipalComponente} from './menu-principal.componente';
//modulos
import {VendasModule} from '../vendas/vendas.module'




const MenuPrincialRoutes: Routes = [
  { path: 'menu-principal',  
  component: MenuPrincipalComponente,
 

},
  
];

@NgModule({
  imports: [
    RouterModule.forChild(MenuPrincialRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MenuPrincipalRouter { }
