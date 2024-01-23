import { Component } from '@angular/core';

@Component({
    selector:'app-contador',
    template: `
        <h1>{{ titulo }}</h1>
        <h3> La Base es: <strong> {{base}} </strong></h3>

        <!-- <button (click)=" numero = numero + 1;" > +1 </button> -->
        <button (click)=" acumular(base) " > +{{base}} </button>
        <span> {{ numero }} </span>
        <button (click)=" acumular(-base) " > -{{base}} </button>
    `
})

export class ContadorComponent {
    titulo: string = 'Contador App';
    numero: number = 10;

    base: number = 5;

    sumar() {
        this.numero += 1;
    };
    restar() {
        this.numero -= 1;
    };

    acumular( valor:number ){
        this.numero += valor;
    }
}