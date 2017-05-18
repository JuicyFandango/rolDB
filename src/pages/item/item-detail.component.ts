import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'item-detail',
  templateUrl: 'item-detail.component.html' 
})

export class ItemDetail {

  public Item = null;

  constructor(private navController: NavController, private navParams: NavParams){
    this.Item = navParams.get('item');
  }
}
