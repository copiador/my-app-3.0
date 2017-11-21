import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Component
import {MenuPrincipalComponente} from './menu-principal.componente';

//modulos
import {VendasModule} from '../vendas/vendas.module'
import {RecebidosModule} from '../recebidos/recebidos.module'
import {CrudsModule} from '../cruds/cruds.module'
import {RelatoriosModule} from '../relatorios/relatorios.module'


export function vendasRouteFactory() {
  return VendasModule;
}
export function recebidosRouteFactory() {
  return RecebidosModule;
}
export function crudsRouteFactory() {
  return CrudsModule;
}
export function relatoriosRouteFactory() {
  return RelatoriosModule;
}


const MenuPrincialRoutes: Routes = [
  { path: 'menu-principal',  
  component: MenuPrincipalComponente,
    children:[{
      path: 'menu-vendas',
      loadChildren: vendasRouteFactory
  },{
    path:'menu-recebidos',
    loadChildren: recebidosRouteFactory,
  },{
    path: 'menu-cruds',
    loadChildren: crudsRouteFactory,
  },{
    path: 'menu-relatorios',
    loadChildren: relatoriosRouteFactory
  }

]},
  
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
