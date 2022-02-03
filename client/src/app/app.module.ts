import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomFormsModule } from 'ng2-validation';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleLoginProvider,
} from 'angularx-social-login';

import { AppComponent } from './app.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { HomeComponent } from 'src/app/home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from 'src/app/check-out/check-out.component';
import { OrderSuccessComponent } from 'src/app/order-success/order-success.component';
import { MyOrdersComponent } from 'src/app/my-orders/my-orders.component';
import { AdminProductsComponent } from 'src/app/admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from 'src/app/admin/admin-orders/admin-orders.component';
import { LoginComponent } from 'src/app/login/login.component';
import { ProductFormComponent } from './admin/product-form/product-form.component';

import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: 'check-out', component: CheckOutComponent },
  { path: 'order-success', component: OrderSuccessComponent },
  { path: 'my/orders', component: MyOrdersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/product/new', component: ProductFormComponent },
  { path: 'admin/product/:id', component: ProductFormComponent },
  { path: 'admin/products', component: AdminProductsComponent },
  { path: 'admin/orders', component: AdminOrdersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    OrderSuccessComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    ProductFormComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    SocialLoginModule,
    CustomFormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '1079530250823-ve441metgia253o0otbcstg02omhpmp0.apps.googleusercontent.com'
            ),
          },
        ],
      } as SocialAuthServiceConfig,
    },
    CategoryService,
    ProductService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
