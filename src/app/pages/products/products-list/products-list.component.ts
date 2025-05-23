import { Component, OnInit,OnDestroy } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProdcutService } from '../../../prodcut.service';
import { ApiService } from '../../../api.service';
import { IProduct } from '../../../models/products';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit,OnDestroy {
  products!: IProduct[];
  prodcutId!: any;
  mySub1!:Subscription[]
  
  constructor(
    private ProdcutService: ProdcutService,
    private router: Router,
    private ApiService: ApiService
  ) {}

  ngOnInit(): void {
   let sub =  this.ApiService.getAllProducts().subscribe((response) => {
      this.products = response;
    });
    this.mySub1.push(sub)
  }

  delete(id: string) {
   this.mySub1.push(this.ApiService.deleteProduct(id).subscribe(() => {
      this.products = this.products.filter(
        (product) => product.id != id
      );
    }));
  }
  goToEditPage(id: String) {
    this.router.navigate([`/products/edit/${id}`]);
  }

  ngOnDestroy(): void {
    this.mySub1[0].unsubscribe();
  }
}
