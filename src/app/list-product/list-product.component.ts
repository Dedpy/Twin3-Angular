import { Product } from './../model/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css'],
})
export class ListProductComponent implements OnInit {
  public title: String;
  public list: Product[];
  constructor() {}

  ngOnInit(): void {
    this.title = 'My App Store';
    this.list = [
      {
        id: 1,
        name: 'Laptop',
        price: 1000,
        description: 'Laptop HP',
        category: 'Computer',
        image:
          'https://media.mytek.tn/media/webp_image/wysiwyg/banner/pc-portable/81WQ00GSFG.webp',
        nbLike: 5,
        quantity: 5,
      },
      {
        id: 2,
        name: 'Smartphone',
        price: 500,
        description: 'Smartphone Samsung',
        category: 'Phone',
        image:
          'https://media.mytek.tn/media/webp_image/wysiwyg/banner/smartphone/TECNO-POP5-LTE-CYAN.webp',
        nbLike: 153,
        quantity: 3,
      },
      {
        id: 3,
        name: 'Watch',
        price: 300,
        description: 'Smart watch xioami',
        category: 'Computer',
        image:
          'https://media.mytek.tn/media/webp_image/wysiwyg/banner/smartwatch/BHR5439GL.webp',
        nbLike: 0,
        quantity: 2,
      },
    ];
  }
  incrementLike(product: Product): void {
    let i = this.list.indexOf(product);
    if (i != -1) {
      this.list[i].nbLike++;
    }
  }
  buyProduct(product: Product): void {
    let i = this.list.indexOf(product);
    if (i != -1) {
      this.list[i].quantity--;
    }
  }
}
