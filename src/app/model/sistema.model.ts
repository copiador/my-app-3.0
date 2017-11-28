import {ProdutoModel} from './produto.model';
import {ClienteModel} from './cliente.model';
import {RecebidosModel} from './recebidos.model';
import {VendasAvistaModel} from './vendas-a-vista.model'
import {UsuarioModel} from './usuario.model'

export class SistemaModel{

    _id?:number;
    responsavel:string;
    cpfResponsavel: string;
    nomeSistema:string; 
    contatoResponsavel: string;
    informacoes: string;
    //essa parte é destinada aos recursos dos sistema
    ativacao: boolean;
    usuarios:UsuarioModel[];
    clientes: ClienteModel[];
    produtos: ProdutoModel[];
    recebidos: RecebidosModel[];
    vendas: VendasAvistaModel[];

}