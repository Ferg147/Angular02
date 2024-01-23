import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interfaces';
import { v4 as uuid } from 'uuid';


@Injectable()
export class DbzService {
    private _personajes : Personaje[] = [
        {
            id: uuid(),
            nombre: 'Goku',
            poder: 15000
        },
        {
            id: uuid(),
            nombre: 'Vegetta',
            poder: 12000
        }
    ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {}

    agregarPersonaje(personaje:Personaje) {
        personaje.id= uuid();
        this._personajes.push(personaje);
    }

    onDeletePersonaje(id?:string){
        //this._personajes.splice(index,1);
        this._personajes = this._personajes.filter(personaje => personaje.id !== id)
    }

}