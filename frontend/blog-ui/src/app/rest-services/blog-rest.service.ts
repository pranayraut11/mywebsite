import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogRestService {

  constructor(private http: HttpClient) { }

  getAllBlogs():Observable<any>{
    console.log("In service")
   return this.http.get("http://www.pranayraut.in/api/blogs");
  }

  getBlog(id:any):Observable<any>{
    console.log("In service")
   return this.http.get("http://www.pranayraut.in/api/blogs/"+id);
  }
}
