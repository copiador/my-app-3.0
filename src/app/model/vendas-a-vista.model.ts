import {ProdutoModel} from './produto.model';

export class VendasAvistaModel{

    _id?:number;
    data: string;
    cod: number;
    venda: ProdutoModel[];
    
}