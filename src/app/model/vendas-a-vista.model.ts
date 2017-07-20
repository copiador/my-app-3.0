import {ProdutoModel} from './produto.model';

export class VendasAvistaModel{

    _id?:number;
    data: Date;
    cod: number;
    momento: string;
    produtos: ProdutoModel[] = [];

    add(produto: ProdutoModel){
        this.produtos.push(produto);
    }
    
}