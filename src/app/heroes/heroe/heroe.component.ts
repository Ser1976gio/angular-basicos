import { Component } from "@angular/core";


@Component({
    selector:'app-heroe',
    templateUrl:'heroe.component.html'
})
export class HeroeComponent{

    // properties
    nombre:string ='Ironman';
    edad  :number = 45;
    get nombreCapitalizado():string{
        return this.nombre.toUpperCase();
    }

    // funtions
    obtenerNombre():string{
        // los `` sirven para poner codigo html directamente.
        return `${this.nombre} - ${this.edad}`; 
        //return this.nombre + ' - ' + this.edad;  

    }
    cambiarNombre():void{
        this.nombre = 'Spiderman';
    }
    cambiarEdad():void{
        this.edad = 30;
    }
}