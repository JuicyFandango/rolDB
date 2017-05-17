import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Item } from '../../../app/models/item.model';

import { ItemDetail } from './item-detail.component'

@Component({
  selector: 'item-list',
  template: `
  <ion-list inset>
    <ion-list-header>
      Items
    </ion-list-header>
    <button ion-item *ngFor="let item of Items" (click)="onItemSelected(item)">
      {{ item.name }}
    </button>
  </ion-list>
  `
})

export class ItemList{
  constructor(public navCtrl: NavController) {}

  Items = [
    {
      id : 1,
      name : "Poción de diarrea explosiva",
      shortDesc : "Poción que causa un ataque incontrolable de diarrea, entre sus...",
      fullDesc : "Poción que causa un ataque incontrolable de diarrea, entre sus utilidades se encuentra el hacer perder el tiempo al lector.",
      props : [{name: "Efecto instantáneo", desc: "Tiene 1d20 probabilidad de efecto retardado"}]
    },
    {
      id : 2,
      name : "Infinity Edge",
      shortDesc : "Espada legendaria, se cuenta que aquel que la porte...",
      fullDesc : "Espada legendaria, se cuenta que aquel que la porte será aquel que guíe el pueblo de [[REDACTED]] a la victoria.",
      props : [{name: "Crítico aumentado", desc: "Los ataques críticos tienen 1 x ( 0.1 * 1d3) daño aumentado"}]
    }
  ]

  onItemSelected(item: Item){
    this.navCtrl.push(ItemDetail, { item });
  }
}
