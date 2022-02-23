import { Component} from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {

  //@Input('data_personajes') personajes : Personaje[]= [];

  get personajes():Personaje[]{
    return this.dbzservice.personajes;
  }

  constructor (private dbzservice : DbzService){}
}
