import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/Product';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  products$: Product[] = [];

  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((product) => {
      this.products$ = product;
    });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((product) => {
      this.products$ = product;
    });
  }
}
