import {Pipe, PipeTransform} from '@angular/core';
import {ProdutoModel} from '../../model/produto.model';



@Pipe({
  name: 'filter-estoque',
  pure: false
})

export class EstoquePipe implements PipeTransform {
  transform(produtos: ProdutoModel[], args: any){
    if(!produtos || !args ){
           return produtos;
    }else{
        return;
    }
   
  }
}