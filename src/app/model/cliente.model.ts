import {SistemaModel} from './sistema.model'

export class ClienteModel{

    _id?:number;
    nome:string;
    cpf:string;

    rua: string;
    bairro: string;
    numero: string;
    cidade: string;
    estado: string;
    cep: string;

    email: string;
    telefoneFixo: string;
    telefoneCelular: string;
    informacoes: string;
    debitoDoCliente:number; // variavel para quando o cliente quizer comprar a prazo
    sistema: SistemaModel;
    
    
    
}