import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './pages/products/product-details/product-details.component';
import { AccountComponent } from './pages/account/account.component';
import { LoginComponent } from './pages/account/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsListComponent } from './pages/products/products-list/products-list.component';
import { ProductsComponent } from './pages/products/products.component';
import { EditProductComponent } from './pages/products/edit-product/edit-product.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
    children: [
     {
        path: 'lists',
        component: ProductsListComponent,
      },
      {
        path: 'view/:id',
        component: ProductDetailsComponent,
      },
      {
        path: 'delete/:id',
        component: ProductsListComponent,
      },
      {
        path: 'edit/:id',
        component: EditProductComponent,
      },
    ],
  },

  {
    path: 'account',
    component: AccountComponent,
  },
  {
    path: 'account/login',
    component: LoginComponent,
  },
];
