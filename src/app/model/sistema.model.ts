export class SistemaModel{

    _id?:number;
    responsavel:string;
    cpfResponsavel: string;
    nomeSistema:string; 
    contatoResponsavel: string;
    informacoes: string;
    //essa parte é destinada aos recursos dos sistema

    ativacao: boolean; // a parte de ativação serve para desativar o sitema do usuario
 

}