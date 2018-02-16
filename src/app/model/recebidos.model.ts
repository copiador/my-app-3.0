import {ClienteModel} from './cliente.model';
import {SistemaModel} from './sistema.model'
export class RecebidosModel{

    _id?: number;
    cod: number;
    momento: String;
    cliente: ClienteModel;
    valor: number;
    data:String;
    tempo: String;
    sistema: SistemaModel;

    
    
}