import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  img:any
  res:any
  uploadImg:any
  constructor(private global :GlobalService, private auth : AuthService, private toastr:ToastrService, private router : Router) { }

  ngOnInit(): void {
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
