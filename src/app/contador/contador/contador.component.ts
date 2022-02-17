import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <!-- doble llave para variable o expresion-->
    <h1> {{ titulo }} {{1 + 1 }}</h1>
    <h3>La base es:  <strong> {{ base }} </strong></h3>

    <!-- evento entre parentesis seguido de una expresion -->
    <!-- <button (click)= "numero = numero + 1;"> + 1 </button> -->
    <button (click)= "acumular(base)"> + {{ base }} </button> 

    <span> {{ numero }} </span>

    <!-- <button (click)= "numero = numero - 1;"> + 1 </button> -->
    <button (click)= "acumular(-base)"> -{{ base }} </button> 
    
    `
})
export class ContadorComponent{
    public titulo : string = 'Contador app';
    numero: number = 10;
    base: number = 5;
    sumar(){
        this.numero += 1;
    };
    restar(){
        this.numero -= 1;
    };    
    acumular (valor: number){
        this.numero += valor;
    }

}