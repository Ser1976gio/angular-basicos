import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{

  heroe_borrado: string = '';
  heroes: string[] = ['Spiderman', 'Hulk', 'Ironman', 'Capitan America'];
  
  BorrarHeroe(){
    
    //this.heroes.splice(0,1);
    this.heroe_borrado = this.heroes.shift() || '';
    console.log(this.heroes.length);
  }

}
