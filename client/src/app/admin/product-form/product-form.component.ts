import { ActivatedRoute, Router } from '@angular/router';
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
  id;
  categories: Categories[] = [];
  products: Product[] = [];
  product = {} as Product;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private productService: ProductService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');

    this.categoryService.getCategories().subscribe((category) => {
      this.categories = category;
    });

    if (this.id) {
      this.productService.getProductById(this.id).subscribe((product) => {
        this.product = product;
      });
    }
  }

  ngOnInit(): void {}

  save(product: Product) {
    if (this.id) {
      this.productService.putProduct(this.id, product).subscribe();
    } else {
      this.productService.postProduct(product).subscribe((product) => {
        this.products.push(product);
      });
    }

    this.router.navigate(['/admin/products']);
  }
}
