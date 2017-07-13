import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//modulos
import {VendasComponente} from './vendas/vendas.componente';
import {LoginComponente} from './login/login.componente';
import {RelatoriosComponente} from './relatorios/relatorios.componente';
//guardas serviço
import {LoginGuardaService} from './service/login.guarda.service';
const routes: Routes = [
 //navs
   
     
   {
    path: 'cruds-nav-module', 
    loadChildren: './cruds/cruds.module#CrudsModule',
   },
   {
    path: 'vendas-module', 
    loadChildren: './vendas/vendas.module#VendasModule',
   },
   {
    path: 'relatorios-module', 
    component: RelatoriosComponente,
    canActivate: [LoginGuardaService]


   }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes,{enableTracing: true}) ],
  exports: [ RouterModule ]
})

export class AppRotasModule {}