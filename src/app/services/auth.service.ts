import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userImage:any={}
public userData:any=[]
  urlPath = "http://localhost:8080/"
  public loginFlag = true
  constructor(private http : HttpClient) { }
  register(obj:any):Observable<any>{
    return this.http.post(`${this.urlPath}user/register` , obj )
  }
  login(obj : any):Observable<any>{
    return this.http.post(`${this.urlPath}user/login` , obj)
  }
  logout(obj : any):Observable<any>{
    return this.http.post(`${this.urlPath}user/logout` , obj)
  }
  uploadImg( obj : any):Observable<any>{
    return this.http.post(`${this.urlPath}user/profile` , obj)
  }
  
}
