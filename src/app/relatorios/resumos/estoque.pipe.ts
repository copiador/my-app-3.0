import {Pipe, PipeTransform} from '@angular/core';
import {ProdutoModel} from '../../model/produto.model';



@Pipe({
  name: 'filterEstoque',
  pure: false
})

export class EstoquePipe implements PipeTransform {
  transform(produtos: ProdutoModel[], args: any){
    if(!produtos || !args ){
           return produtos;
    }else{
      if(args==1){
        console.log("primeiro opção");
        return produtos;
      }else if(args==2){
         console.log("segunda opção");
         return produtos.filter(produto => produto.quantidade < 4);
      }else if(args==3){
        console.log("terceira opção");
        return produtos.filter(produto => produto.quantidade == 0);
      }else{
        return produtos;
      }
    }
   
  }
}