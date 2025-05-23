import { Component, } from '@angular/core';
import {RouterOutlet} from '@angular/router'
import { ProductNavBarComponent } from "../../compants/product-nav-bar/product-nav-bar.component";

@Component({
  selector: 'app-products',
  imports: [ProductNavBarComponent,RouterOutlet],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})

export class ProductsComponent {

}


