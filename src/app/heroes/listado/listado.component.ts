import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman','IronMan','Hulk','Batman'];
  heroeBorrado: string = '';

  borrarErroe():void {
    this.heroeBorrado = this.heroes.shift() || '';
  }
}
