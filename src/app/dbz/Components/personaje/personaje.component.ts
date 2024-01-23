import { Component, EventEmitter, Output } from '@angular/core';
import { DbzService } from '../../services/dbz.service';

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html'
})
export class PersonajeComponent  {

  // @Input() personajes: Personaje[] = [];
  

  get personajes() {
    return this.argumento.personajes;

  }

  constructor( private argumento:DbzService){ }

  //@Output()
  //public onDelete: EventEmitter<number> = new EventEmitter();

  onDeleteComponent(id?:string):void{
    console.log(id);
    //this.onDelete.emit(index);
    this.argumento.onDeletePersonaje(id);
  }

  

}
