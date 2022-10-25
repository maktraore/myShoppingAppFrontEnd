import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products!: Product[];

  constructor(private ps:ProductService) { }

  ngOnInit(): void {
    this.ps.findAllProducts().subscribe(
      data=>{ this.products=data;
  });

  }
} 
