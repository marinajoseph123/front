import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}
  create(obj : any):Observable<any>{
    return this.http.post(`http://localhost:8080/product/create` , obj)

 }
}
