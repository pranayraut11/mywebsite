import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BlogRestService } from 'src/app/rest-services/blog-rest.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog.list.component.html',
  styleUrls: ['./blog.list.component.scss']
})
export class BlogListComponent implements OnInit {
  
  blogs = new Array;
  blog : any;
  constructor (private blogsRestService : BlogRestService,private route: Router){

  }
  ngOnInit(): void {
   this.getBlogs();
  }
  
  gotoBlogDetails(id:any){
   this.route.navigate(["blogs/"+id]);
  }

  getBlogs(){
    this.blogsRestService.getAllBlogs().subscribe(blogs=>{
      this.blogs=blogs;
      console.log(this.blogs);
    })
  }

}
