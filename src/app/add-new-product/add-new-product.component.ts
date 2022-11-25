import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from '../_model/product.model';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-add-new-product',
  templateUrl: './add-new-product.component.html',
  styleUrls: ['./add-new-product.component.css']
})
export class AddNewProductComponent implements OnInit {

product: Product = {
productName: "",
productDescription:"",
price:0,
features:"",
productStatus:""
}
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
  addProduct(productForm: NgForm){
 this.productService.addProduct(this.product).subscribe(
  (Response: Product) => {
    productForm.reset();
  },
  (error: HttpErrorResponse) => {
    console.log(error);
  }
 );
  }
}
