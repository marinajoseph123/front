import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users:any=[]
  pageSize= 2
  p:number = 1
  total :any = 0
  constructor(private global:GlobalService) { 
    this.global.allUsers().subscribe(res=>{
      this.users = res.data
    })
  }

  ngOnInit(): void {
  }
  handledeleteUser (id:any , ind :any){
    this.global.deleteUser(id).subscribe(res=>{
      console.log(res)
      this.users.splice(ind , 1)
    })
  }
  pageChanged(num:any){
    console.log(num)
    this.getAllUsers(num-1)
    this.p = num
  }

  getAllUsers(pageNum :any){
    this.global.getUsers(pageNum).subscribe(data=>{
      this.users = data.data
      this.total = data.count
    })
  }
}
