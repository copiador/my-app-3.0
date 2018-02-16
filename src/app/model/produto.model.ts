import {SistemaModel} from './sistema.model'

export class ProdutoModel{
   _id:number;
    codigoBarras: number;
    nome:string;
    valor: number;
    quantidade: number;
    sistema: SistemaModel;

}

export const constRelatorioProdutos = [
    
    {id: 1, relatorioProdutos: 'Todos os produtos'},
    {id: 2, relatorioProdutos: 'Produtos com menor quantidade'},
    {id: 3, relatorioProdutos: 'Produtos em falta'}

];