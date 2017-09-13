import {ClienteModel} from './cliente.model';

export class RecebidosModel{

    _id?: number;
    cod: number;
    momento: String;
    cliente: ClienteModel;
    valor: number;
    data:String;
    tempo: String;

    
    
}