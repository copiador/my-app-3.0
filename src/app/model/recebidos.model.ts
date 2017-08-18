import {ClienteModel} from './cliente.model';

export class RecebidosModel{

    _id?: Number;
    data: Date;
    cod: Number;
    momento: String;
    cliente: ClienteModel;
    valorTotalVenda : number;

    
    
}