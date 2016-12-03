import { Component, Input } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.sass']
})
export class ProductComponent {

  title:string;

  @Input()
  item;

}


