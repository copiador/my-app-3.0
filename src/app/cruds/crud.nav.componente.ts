import { Component } from '@angular/core';

@Component({
  template: `
   <div class="row">
	    <div class="col-md-2">
		    <ul class="nav nav-pills nav-stacked">
			    <li role="presentation" routerLinkActive="active">
					<a routerLink="clientes-cadastrar" >CLIENTE</a>
				</li>
				<li role="presentation"routerLinkActive="active">
					<a routerLink="produtos-cadastrar" >PRODUTO</a>
				</li>
			</ul>
    </div>
   <router-outlet></router-outlet>
  `
})
export class CrudNavComponente  { }


//