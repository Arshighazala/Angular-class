import { ProductDetails } from './../../service/product.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
 @Input() productDetails: ProductDetails;
 @Output()(' addToCart') addTo = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log(this.productDetails);
  }
  addToCart() {
    this.addTo.emit(this.productDetails);

}
}

