import {ProdutoModel} from './produto.model';

export class VendasAvistaModel{

    _id?: Number;
    data: Date;
    cod: Number;
    momento: String;
    produtos: ProdutoModel[] = [];
    valorTotalVenda : number;

    add(produto: ProdutoModel){
        let produto2 = new ProdutoModel();
        produto2 = produto;
        this.produtos.push(produto2);
    }
    
}