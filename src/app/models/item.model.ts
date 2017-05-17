import { ItemProps } from './item-props.model';

export class Item{
  id        : number;
  icon      : string;
  name      : string;
  shortDesc : string;
  fullDesc  : string;
  props     : Array<ItemProps>;

  constructor(item: any){
    this.id     = item.id;
    this.name   = item.name;
  }
}
