import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CanDeactivateGuard } from './service/can.deactivate.guard.service'
import {MenuPrincipalComponente} from './menu-principal/menu-principal.componente'
import {LoginModuleComponent} from './login-module/login.module.component'


//guardas serviço
import {LoginGuardaService} from './service/login.guarda.service';
const routes: Routes = [
 //navs
 
  //{
   // path: 'vendas-module', 
   // loadChildren: './vendas/vendas.module#VendasModule',
   //},
   
   {
    path: 'recebidos-module', 
    loadChildren: './recebidos/recebidos.module#RecebidosModule',
   },
     
   {
    path: 'cruds-nav-module', 
    loadChildren: './cruds/cruds.module#CrudsModule',
   },
 
  
   {
    path: 'relatorios-module', 
    loadChildren: './relatorios/relatorios.module#RelatoriosModule',
    //canActivate: [LoginGuardaService]
   }
]
@NgModule({
  imports: [ RouterModule.forRoot(routes,{enableTracing: true}) ],
  exports: [ RouterModule ],
  providers:[ CanDeactivateGuard ],
})

export class AppRotasModule {}