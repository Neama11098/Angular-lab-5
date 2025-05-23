import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {IProduct} from '../app/models/products'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url:string = "http://localhost:3005/products"
  constructor(private http :HttpClient) { }


  getAllProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url);
  }
  getOneProduct(id:string):Observable<IProduct>{
    return this.http.get<IProduct>(`${this.url}/${id}`);
  }

  addProduct(product:any):Observable<IProduct>{
    return this.http.post<IProduct>(this.url,product);
  }
  editProduct(productId: string, product: any): Observable<IProduct> {
    return this.http.put<IProduct>(`${this.url}/${productId}`, product);
  }
  deleteProduct(productId: string): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.url}/${productId}`);
  }
}
