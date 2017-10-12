import {Pipe, PipeTransform} from '@angular/core';
import {ProdutoModel} from './../model/produto.model';



@Pipe({
  name: 'filterProduto',
  pure: false
})

export class FilterProdutoComponente implements PipeTransform {
  transform(produtos: ProdutoModel[], args: any){
    if(!produtos || !args ){
           return produtos;
    }
   return produtos.filter(produto => produto.nome.indexOf(args) !== -1);
  }
}