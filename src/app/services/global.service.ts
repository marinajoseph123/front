import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  
  public userInfo:any={}
  constructor(private http:HttpClient) { }
  getGallery():Observable<any>{
    return this.http.get('http://localhost:8080/product/all')
  }
  getSingleProduct(id:any):Observable<any>{
    return this.http.get(`http://localhost:8080/product/all/:${id}`)
  }
  login(obj:any):Observable<any>{
    return this.http.post(`http://localhost:8080/user/login` , obj)
  }
  allUsers():Observable<any>{
    return this.http.get(`http://localhost:8080/user/all`)
  }
  singleUser(id:any):Observable<any>{
    return this.http.get(`http://localhost:8080/user/all/:${id}`)
  }
  EditUser(id:any , obj :any):Observable<any>{
    return this.http.patch(`http://localhost:8080/user/all/:${id}` , obj)
  }
  deleteUser(id:any):Observable<any>{
    return this.http.delete(`http://localhost:8080/user/all/:${id}`)
  }
  create(obj : any):Observable<any>{
    return this.http.post(`http://localhost:8080/product/create` , obj)

  }
  uploadImg( obj : any):Observable<any>{
    return this.http.post(`http://localhost:8080/user/profile` , obj)
  }
  getUsers(pageNum:any):Observable<any>{
    return this.http.get(`http://localhost:8080/user/profile/all?pageNum=${pageNum}&pageLimit=5`)
  }
  getProducts(pageNum:any):Observable<any>{
    return this.http.get(`http://localhost:8080/products/profile/all?pageNum=${pageNum}&pageLimit=5`)
  }
   authMe():Observable<any>{
    return this.http.get(`http://localhost:8080/user/me`)

  }
}
