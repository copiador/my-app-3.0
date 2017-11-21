import { Component } from '@angular/core';

@Component({
	template: `

	
	
    <ul class="nav nav-tabs nav-justified">
	    <li role="presentation" routerLinkActive="active">
		    <a routerLink="crud-nav-cadastrar">CADASTRAR</a>
		</li>
		<li role="presentation" routerLinkActive="active">
			<a routerLink="crud-nav-listar" >LISTAR</a>
		</li>
	</ul>
	<p></p>
    <router-outlet></router-outlet>   
  `
})
export class CrudNavTitulo  { }


//