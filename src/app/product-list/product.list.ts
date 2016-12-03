import { Component } from '@angular/core';
import { Product } from '../product-component/product'

@Component({
  selector: 'product-list',
  templateUrl: 'product.list.html',
  styleUrls: ['product.list.sass']
})
export class ProductList {

  items = [
    new Product(
      'Gucci Sylvie Shoulder Bag',
      'assets/img/sylviebag.jpg'
    ),
    new Product(
      'Gucci Sylvie Shoulder',
      'assets/img/sylviebag.jpg'
    ),
    new Product(
      'Gucci Sylvie Shoulder 2 ',
      'assets/img/sylviebag.jpg'
    )];

}

