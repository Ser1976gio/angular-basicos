import { Component, Input} from '@angular/core';
//import { EventEmitter } from '@angular/core';

import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'

})
export class AgregarComponent   {

  // Siempre que se utilice un servicio en un componente hay que inicializarlo en el constructor 
  constructor(private dbzservice: DbzService){} 
  @Input('data_nuevo') nuevo : Personaje = {nombre: 'default', poder: 10};
  // @Output() onNuevoPersonaje:EventEmitter<Personaje>= new EventEmitter();

  agregar(){
    if (this.nuevo.nombre.trim().length == 0)
    {return;}

    //this.onNuevoPersonaje.emit(this.nuevo)
    this.dbzservice.agregarNuevoPersonaje(this.nuevo);
    this.nuevo = {
      nombre : 'default',
      poder : 10
    }
  }

}
