import { Component } from "@angular/core";

@Component({
    selector: 'app-herore',
    templateUrl: 'heroe.component.html',
})

export class HeroeComponent{
    nombre: string = 'IronMan';
    edad: number = 45;

    get capitalizadoNombre(): string {
        return this.nombre.toUpperCase();
    }

    obtenerNombre():string {
        return `${ this.nombre } - ${ this.edad }`;
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void{
        this.edad = 25;
    }
}