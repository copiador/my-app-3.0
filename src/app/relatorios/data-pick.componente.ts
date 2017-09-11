import { Component, Input, Output, EventEmitter } from '@angular/core';

import * as moment from 'moment';
import 'moment/locale/pt-br';



@Component({
 selector: 'data-pick',
 templateUrl: './data-pick.componente.html'
})
export class DataPickComponent {

    public  dataMoment: string;
    @Output() dataMomentOutput = new EventEmitter();
    public dt: Date = new Date();
    public minDate: Date = void 0;
    public events: any[];
    public tomorrow: Date;
    public afterTomorrow: Date;
    public dateDisabled: {date: Date, mode: string}[];
    public formats: string[] = ['DD-MM-YYYY', 'YYYY/MM/DD', 'DD.MM.YYYY',
      'shortDate'];
    public format: string = this.formats[0];
    public dateOptions: any = {
      formatYear: 'YY',
      startingDay: 1
    };
    private opened: boolean = false;
   
    public constructor() {
 
  
     
    }
   
    public getDate(): number {

        let diaMoment = moment(this.dt);
        diaMoment.locale('pt-BR');
        this.dataMoment = diaMoment.format("dddd-MMMM-YYYY");
        let dataEventEmitter = diaMoment.format("DD-MM-YYYY");

        this.dataMomentOutput.emit(dataEventEmitter);
        
      return this.dt && this.dt.getTime() || new Date().getTime();
     

      
    }
   
    public today(): void {
      this.dt = new Date();
    }
   
 
  
   
    // todo: implement custom class cases
    public getDayClass(date: any, mode: string): string {
      if (mode === 'day') {
        let dayToCheck = new Date(date).setHours(0, 0, 0, 0);
   
        for (let event of this.events) {
          let currentDay = new Date(event.date).setHours(0, 0, 0, 0);
   
          if (dayToCheck === currentDay) {
            return event.status;
          }
        }
      }
   
      return '';
    }
   
    public disabled(date: Date, mode: string): boolean {
      return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
    }
   
    public open(): void {
      this.opened = !this.opened;
    }
   
  
 
   
}