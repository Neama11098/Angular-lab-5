import { Injectable } from '@angular/core';
import {IProduct} from '../app/models/products'
@Injectable({
  providedIn: 'root'
})
export class ProdcutService {
  products !:IProduct[]

  constructor() { 
    this.products = [
    {
      id: "1",
      name: 'Wireless Headphones',
      description: 'High-quality wireless headphones with noise cancellation.',
      price: 199.99,
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=350&q=80'
    },
    {
      id: "2",
      name: 'Smart Watch',
      description: 'Stylish smart watch with fitness tracking features.',
      price: 149.99,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=350&q=80'
    },
    {
      id: "3",
      name: 'Bluetooth Speaker',
      description: 'Portable Bluetooth speaker with deep bass.',
      price: 89.99,
      imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=350&q=80'
    }
  ];
  }

  getProdcut(){
    return this.products
  }

  getProdcutById(id:string) : IProduct | undefined{
    return this.products.find( product => product.id == id)
  }

  deleteProductBYId(id:string): IProduct[] {
     this.products = this.products.filter( product => product.id != id)
     return this.products
  }
  addProduct(product :IProduct) :void{
    product.id= (this.products.length+1).toString()
    this.products.push(product)
  }
  updateProductById(id: string, updatedProduct: IProduct): void {
  const index = this.products.findIndex(product => product.id === id);
  if (index !== -1) {
    this.products[index] = { ...updatedProduct, id }; 
  }
}
}
