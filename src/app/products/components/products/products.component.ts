import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.model';
import { ProductsService } from './../../../core/services/products/products.service';




@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];


  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    // this.products = this.productsService.getAllProducts();
    // console.log(this.products);
    this.fetchProducts()
  }
 

  clickProduct(id: number){
    console.log("Le dieron clic al carrito we!")
    console.log(id)
  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe(products => {
      console.log(products);
      this.products = products
      
    })
  }

}
