import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemProvider } from '../../providers/item/item';

import { ItemDetail } from './item-detail.component'

@Component({
  selector: 'item-list',
  template: `
  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>
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

    Items = null;

  onItemSelected(item: any){
    this.navCtrl.push(ItemDetail, { item });
  }

  getItems(event: string){
    this.Items = ItemProvider.getItems();
  }
}
