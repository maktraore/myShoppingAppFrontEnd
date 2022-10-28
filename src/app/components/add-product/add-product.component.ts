import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/model/message';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  msg!:Message;
  constructor(private ps:ProductService) { }

  ngOnInit(): void { }

  onSubmit(pdata:any) {
    const data=JSON.stringify(pdata.value);
    this.ps.registerProduct(data).subscribe(
      res =>{this.msg=res;}
    );
  }

}
