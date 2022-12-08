import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrderDetails } from '../_model/order-details.model';
import { Product } from '../_model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  public addProduct(product: FormData){
    return this.httpClient.post<Product>("http://localhost:8081/product/add",product);
  }
  public getAllProducts(){
    return this.httpClient.get<Product[]>("http://localhost:8081/all");
  }
  public getProductDetailsById(productId){
    return this.httpClient.get<Product>("http://localhost:8081/getProductDetailsById/"+productId);
  }
 public deleteProduct(productId: number){
  return this.httpClient.delete("http://localhost:8081/delete/"+productId);
 }
 public getProductDetails(isSingleProductCheckout, productId){
  return this.httpClient.get<Product[]>("http://localhost:8081/getProductDetails/"+isSingleProductCheckout+"/"+productId);
 }
 public placeOrder(orderDetails: OrderDetails){
   return this.httpClient.post("http://localhost:8081/placeOrder/", orderDetails);
 }
}
