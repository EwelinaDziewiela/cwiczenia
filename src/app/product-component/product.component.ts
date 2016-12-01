import { Component } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: 'product.component.html',
  styleUrls: ['product.component.sass']
})
export class ProductComponent {
  title:string;

  product = {
    image:'assets/img/sylviebag.jpg',
    title:'Gucci Sylvie Shoulder Bag'
  }


}


