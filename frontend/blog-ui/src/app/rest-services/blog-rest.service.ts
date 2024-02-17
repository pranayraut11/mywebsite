import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BlogRestService {

  constructor(private http: HttpClient) { }

  getAllBlogs(pageNumber:number,pageSize:number):Observable<any>{
    console.log("In service")
   return this.http.get("http://localhost:8080/api/blogs?pageNumber="+pageNumber+"&pageSize="+pageSize);
  }

  getBlog(id:any):Observable<any>{
    console.log("In service")
   return this.http.get("http://localhost:8080/api/blogs/"+id);
  }

  createBlog(blog:any){
   return this.http.post("http://localhost:8080/api/blogs",blog);
  }
}
