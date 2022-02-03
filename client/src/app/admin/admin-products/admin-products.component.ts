import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/Product';
@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  filterProducts: Product[] = [];
  subscription: Subscription | undefined;

  constructor(private productService: ProductService) {
    this.subscription = this.productService
      .getProducts()
      .subscribe((product) => {
        this.filterProducts = this.products = product;
      });
  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((product) => {
      this.products = product;
    });
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  filter(query: string) {
    this.filterProducts = query
      ? this.products.filter((p) =>
          p.title.toLowerCase().includes(query.toLocaleLowerCase())
        )
      : this.products;
  }
}
