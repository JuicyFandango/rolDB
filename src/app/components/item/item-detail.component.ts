import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'item-detail',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>
          {{ Item.name }}
        </ion-title>
      </ion-navbar>
    </ion-header>
    <ion-content>
        <ion-list *ngFor="let prop of Item.props">
        <ion-list-header>
          {{ Item.fullDesc }}
        </ion-list-header>
          <ion-item>
            <h3>{{ prop.name }}</h3>
            <p>{{ prop.desc }}</p>
          </ion-item>
        </ion-list>
    </ion-content>
  `
})

export class ItemDetail {

  public Item = null;

  constructor(private navController: NavController, private navParams: NavParams){
    this.Item = navParams.get('item');
  }
}
