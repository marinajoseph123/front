import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor(private global:GlobalService) { }

  ngOnInit(): void {
    console.log(this.global.getGallery())
    this.global.getGallery().subscribe(data=>{
      console.log(data)
      // this.users = data.data
    } , (err)=>{
      console.log(err)
    })
  }

}
