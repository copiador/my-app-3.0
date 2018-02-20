import {ProdutoModel} from './produto.model';
import {ClienteModel} from './cliente.model';
import {SistemaModel} from './sistema.model'

export class VendasAvistaModel{

    _id?: Number;
    
    cod: Number;
    momento: String;
    data: String;
    tempo: String;
   // Tipo da venda, a vista a praso ou cartão.
    tipo: String;
    produtos: ProdutoModel[] = [];
    valorTotalVenda : number;
    cliente : ClienteModel;
    sistema: SistemaModel;
   
   
    add(produto: ProdutoModel){
        let produto2 = new ProdutoModel();
        produto2 = produto;
        this.produtos.push(produto2);
    }
    
}