import {ProdutoModel} from './produto.model';
import {ClienteModel} from './cliente.model';
import {RecebidosModel} from './recebidos.model';
import {VendasAvistaModel} from './vendas-a-vista.model'
import {UsuarioModel} from './usuario.model'

export class SistemaModel{

    _id?:number;
    nome:string;
    responsavel:string;
    cpfResponsavel: string;
    contatoResponsavel: string;
    //essa parte é destinada aos recursos dos sitema
    ativacao: boolean;
    usuarios:UsuarioModel[];
    clientes: ClienteModel[];
    produtos: ProdutoModel[];
    recebidos: RecebidosModel[];
    vendas: VendasAvistaModel[];

  
    
    
    
}