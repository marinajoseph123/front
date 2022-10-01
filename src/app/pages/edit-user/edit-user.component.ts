import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';
import {FormGroup , FormControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  img:any
  userId:any
  userInfo = new FormGroup({
    name:new FormControl(""),
    age:new FormControl('')
  })
  constructor(private activated: ActivatedRoute , private global:GlobalService, private auth : AuthService, private toastr:ToastrService, private router : Router) {
    this.userId = this.activated.snapshot.paramMap.get("id")
    this.global.singleUser(this.userId).subscribe(res=>{
      this.userInfo.patchValue(res.data)
    })
   }

  ngOnInit(): void {
  }
  handleEdit(){
    this.global.EditUser(this.userId , this.userInfo.value).subscribe(data=>{
      console.log(data)
    })
  }
  handleUpload(ev : any){
    console.log(ev)
    this.img = ev.target.files
  }
  handleSubmit(){
    let formData = new FormData()
    formData.append('img', this.img[0])
    this.global.uploadImg(formData).subscribe(res=>{
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
