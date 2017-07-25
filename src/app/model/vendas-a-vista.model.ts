import {ProdutoModel} from './produto.model';

export class VendasAvistaModel{

    _id?: Number;
    data: Date;
    cod: Number;
    momento: String;
    produtos: ProdutoModel[] = [];
    valorTotalVenda : Number;

    add(produto: ProdutoModel){
        this.produtos.push(produto);
    }
    
}