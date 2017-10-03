import { Component, OnInit } from '@angular/core';
//
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  errorMessage: string;
  product: IProduct;
//works with back button routing with in page
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {
  }
//this will load the page when product is clicked on
  ngOnInit() {
    const id = +this._route.snapshot.paramMap.get('id');
   //could hardcode our product in here
    this.getProduct(id);
  }

  getProduct(id: number) {
    this._productService.getProduct(id).subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }
//works on back button back to products page
  onBack(): void {
    this._router.navigate(['/products']);
  }

// onSubmit(id: number){
//   this.getProduct(id).push
// } 

}
