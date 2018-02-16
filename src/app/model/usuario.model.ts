import {SistemaModel} from './sistema.model'

export class UsuarioModel{

    _id: any;
    email: string;
    senha: string;
    nome:string;
    tipo: string;
     //essa função serve para logar o usuario
    estado: boolean;
    //essa função serve para desativar o usuario
    ativacao: boolean;
    //sistema vinculado ao usuario
    sistema: SistemaModel;
    
}

export const constTipoUsuarios = [

    {id: 1, tipoUsuario: ''},
    {id: 2, tipoUsuario: 'administrador'},
    {id: 3, tipoUsuario: 'vendedor'},

];