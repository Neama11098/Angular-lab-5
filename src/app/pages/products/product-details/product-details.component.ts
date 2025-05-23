import { Component,OnInit,OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {IProduct} from '../../../models/products'
import {ApiService} from '../../../api.service'
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})

export class ProductDetailsComponent implements OnInit,OnDestroy{
 product?:IProduct
 prodcutId!:any
 sub!:Subscription
constructor(
     private ActivatedRoute :ActivatedRoute,
     private ApiService:ApiService
  ){}

  ngOnInit(): void {
    this.prodcutId=this.ActivatedRoute.snapshot.paramMap.get('id');
     this.sub = this.ApiService.getOneProduct(this.prodcutId).subscribe((response)=>{
      this.product=response
    })
  }
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
