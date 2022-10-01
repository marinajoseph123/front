import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any = []
  pageSize= 2
  p:number = 1
  total :any = 0
  // users:any=[]
  // pageSize= 2
  // p:number = 1
  // total :any = 0
  constructor(private global:GlobalService) { 
    this.getAllProducts(2) 
  }
    // this.global.allProducts().subscribe(res=>{
    //   this.products = res.data
    // })
 
  // constructor(private global:GlobalService) { 
  //   this.global.allProducts().subscribe(res=>{
  //     this.products = res.data
  //   })
  // }

  loadingImg : boolean = true
  ngOnInit(): void {
    console.log(this.global.getGallery())
    this.global.getGallery().subscribe(data=>{
      console.log(data)
      this.products = data.data
    } , (err)=>{
      console.log(err)
    }, ()=>{
      this.loadingImg = false
    })
  }
  pageChanged(num:any){
    console.log(num)
    this.getAllProducts(num-1)
    this.p = num
  }

  getAllProducts(pageNum :any){
    this.global.getProducts(pageNum).subscribe(data=>{
      this.products = data.data
      this.total = data.count
    }, (err)=> {

    }, ()=> {
      this.loadingImg = false
    })
  }
}
