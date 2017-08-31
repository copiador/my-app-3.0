import {ClienteModel} from './cliente.model';

export class RecebidosModel{

    _id?: Number;
    cod: Number;
    momentoRecebido: String;
    cliente: ClienteModel;
    valorRecebido: number;

    
    
}