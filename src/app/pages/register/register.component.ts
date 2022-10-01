import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/services/auth.service';
import {NgForm} from "@angular/forms";
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userData:User ={
    name:"",
    age:20,
    email:"",
    password:""
  }
  constructor(private auth : AuthService, private router : Router, private toastr:ToastrService , private global:GlobalService) { }
  ngOnInit(): void {}
  handleRegister(form:NgForm){
    console.log(form)
    console.log(this.userData)
        if(form.valid){
      this.auth.register(this.userData).subscribe(res=>{
        console.log(res)
        localStorage.setItem('token' , res.data.token)
        if(res.apiStatus) {
                   this.toastr.success('SignUp!', 'Toastr fun!');
                this.auth.loginFlag = false
                this.router.navigateByUrl('')
        }    
        this.router.navigateByUrl("login")
        this.router.navigate(['login'])
      }, (err)=>{
        console.log(err)
      })
    
    }
    
  }
  
 // handleLogin(form:NgForm){
  //   if(form.valid){
  //     this.auth.login(this.user).subscribe(res=>{
  //       console.log(res)
  //       localStorage.setItem('token' , res.data.token)
  //       if(res.apiStatus) {
  //         this.toastr.success('Hello world!', 'Toastr fun!');
  //         this.auth.loginFlag = false
  //         this.router.navigateByUrl('')
  //       }
  //     },(err)=>{
  //       console.log(err.error.message)
  //       this.errorMsg = err.error.message
  //     })
  //   }
  // }
    
  }


