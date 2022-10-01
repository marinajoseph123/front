import { Component, OnInit } from '@angular/core';
import { Add } from 'src/app/interfaces/add.product';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
// import { FormBuilder, FormGroup, FormControl, Validators } from "@angular/forms";
import { ProductService } from 'src/app/services/product.service';
import {FormGroup , FormControl , Validators} from "@angular/forms";
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productForm = new FormGroup({
    userId: new FormControl('') ,
    _id: new FormControl('') ,
    name: new FormControl("" , [Validators.required]  ), 
    price : new FormControl("" , [Validators.required]),
   quantity : new FormControl("" , [Validators.required]),
   
  })
  isSubmit = false
  // userData:any={ }
  user:Add={
  _id: 0,
  userId: 0,
  name: "",
  price: 50,
  quantity: 1
  }
  constructor(private router : Router, private toastr:ToastrService , private Auth:AuthService, private global:GlobalService, private productService: ProductService) { }
 
  get userName(){return this.productForm.get("name")}
  get userData(){return this.productForm.controls}
  ngOnInit(): void {}

  handleSubmit(){
    this.isSubmit = true
    console.log(this.productForm)
    if(this.productForm.valid){
      this.global.authMe().subscribe(res=>{
        // this.userData= res.data

      })
      this.global.create(this.productForm.value).subscribe(res=>{
        // this.productForm.userId= this.userData._id
        console.log(res)
         if(res.apiStatus){
          this.toastr.success('Added!', 'Toastr fun!');
          this.global.userInfo = res.data.userData
          this.router.navigateByUrl("home")
        }
      })
    }
  }
 
}
