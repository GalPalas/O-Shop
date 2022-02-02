import { Product } from 'src/app/shared/Product';
import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/shared/Categories';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  categories: Categories[] = [];
  products: Product[] = [];

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.categoryService.getCategories().subscribe((category) => {
      this.categories = category;
    });
  }

  ngOnInit(): void {}

  save(product: Product) {
    this.productService.postProduct(product).subscribe((product) => {
      this.products.push(product);
    });
  }
}
