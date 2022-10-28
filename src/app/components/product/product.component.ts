import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products!: Product[];

  constructor(private ps:ProductService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // + will change the string number to number
    this.route.params.subscribe(() =>
      {
        const param = this.route.snapshot.paramMap.get("cid");
        const cid = param?+param:1;
        this.findProduct(cid);
      }
    );
  }

  findProduct(cid:number){
    this.ps.findAllProducts(cid).subscribe(
      data=>{ this.products=data });

  }
} 