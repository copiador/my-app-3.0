import {ProdutoModel} from './produto.model';
import {ClienteModel} from './cliente.model';

export class VendasAvistaModel{

    _id?: Number;
    data: Date;
    cod: Number;
    momento: String;
    produtos: ProdutoModel[] = [];
    valorTotalVenda : number;
    cliente : ClienteModel;

    add(produto: ProdutoModel){
        let produto2 = new ProdutoModel();
        produto2 = produto;
        this.produtos.push(produto2);
    }
    
}