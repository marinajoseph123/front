import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit {
productId:any
singleProduct:any
  constructor(private global :GlobalService , private activated : ActivatedRoute ) {}

  ngOnInit(): void {
    this.productId = this.activated.snapshot.paramMap.get("productId")
    console.log(this.productId)
    this.global.getSingleProduct(this.productId).subscribe(product=>{
      this.singleProduct = product;
    })
  }

}
