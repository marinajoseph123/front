import { Component, OnInit } from '@angular/core';
import { Login } from 'src/app/interfaces/login';
// import {NgForm} from "@angular/forms"
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import {FormGroup , FormControl , Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl("" , [Validators.required , Validators.email]  ), //Validators.pattern()
    password : new FormControl("" , [Validators.required , Validators.minLength(5)])
  })
  isSubmit = false
  user:Login={
    email:"",
    password:""
  }
  errorMsg : string = ""
  constructor(private auth:AuthService , private toastr:ToastrService , private router : Router, private global:GlobalService ) { }
  get userEmail(){return this.loginForm.get("email")}
  get userData(){return this.loginForm.controls}


  ngOnInit(): void {}
   handleSubmit(){
    this.isSubmit = true
    console.log(this.loginForm)
    if(this.loginForm.valid){
      this.global.login(this.loginForm.value).subscribe(res=>{
        console.log(res)
         if(res.apiStatus){
          localStorage.setItem("token" , res.data.token)
          this.toastr.success('Success!', 'Toastr fun!');
          // this.global.navbarFlag= true
          this.global.userInfo = res.data.userData
          this.router.navigateByUrl("home")
        }
      })
    }
  }
canExit():boolean{
if(this.isSubmit == false && this.loginForm.dirty){
  alert('please save changes')
  return true
}
else return false
  } 
}
