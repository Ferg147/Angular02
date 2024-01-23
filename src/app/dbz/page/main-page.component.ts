import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interfaces';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  // personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: 'Trunks',
    poder: 14000
  }

  // get personajes():Personaje[]{
  //   return this.argumento.personajes;
  // }

  // agregarNuevoPersonaje( argurmento:Personaje) {
  //   this.personajes.push(argurmento); 

  // }

  // onDeletePersonaje(index:number){
  //   console.log("MainPage Number index :"+index)
  // }
  // constructor( private argumento:DbzService){
    constructor(){
    // this.personajes = this.argumento.personajes;

   }

}
