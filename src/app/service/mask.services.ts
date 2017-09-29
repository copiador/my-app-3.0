import { Component} from '@angular/core';
import { Injectable } from '@angular/core';




@Injectable()
export class MaskServices{

    maskCpf(){

        return [/[0-9]/, /\d/, /\d/,'.', /\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
    }
    maskCep(){
        
        return [/[0-9]/, /\d/, /\d/,/\d/,/\d/,'-', /\d/, /\d/, /\d/];
    }
    maskNumero(){
        
        return [/[0-9]/,/\d/,/\d/,/\d/];
    }
    maskTelefoneFixo(){
        
        return ['(',/[0-9]/,/\d/,')',' ',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
    }
    maskTelefoneCelular(){
       
        return ['(',/[0-9]/,/\d/,')',' ',/\d/,'.',/\d/,/\d/,/\d/,/\d/,'-',/\d/,/\d/,/\d/,/\d/];
    }

}