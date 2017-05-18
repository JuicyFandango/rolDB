import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ItemProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ItemProvider {

  constructor(public http: Http) {
    console.log('Hello ItemProvider Provider');
  }

  getItems(){
    return [
      {
        id : 1,
        type: "Consumible",
        icon: "flask",
        name : "Poción de diarrea explosiva",
        shortDesc : "Poción que causa un ataque incontrolable de diarrea, entre sus...",
        fullDesc : "Poción que causa un ataque incontrolable de diarrea, entre sus utilidades se encuentra el hacer perder el tiempo al lector.",
        props : [{name: "Efecto instantáneo", desc: "Tiene 1d20 probabilidad de efecto retardado"}]
      },
      {
        id : 2,
        type: "Arma",
        icon: "hammer",
        name : "Infinity Edge",
        shortDesc : "Espada legendaria, se cuenta que aquel que la porte...",
        fullDesc : "Espada legendaria, se cuenta que aquel que la porte será aquel que guíe el pueblo de [[REDACTED]] a la victoria.",
        props : [{name: "Crítico aumentado", desc: "Los ataques críticos tienen 1 x ( 0.1 * 1d3) daño aumentado"}]
      }
    ];
  };
}
