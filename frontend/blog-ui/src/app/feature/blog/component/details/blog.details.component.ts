import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogRestService } from 'src/app/rest-services/blog-rest.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog.details.component.html',
  styleUrls: ['./blog.details.component.scss']
})
export class BlogDetailsComponent implements OnInit {
  blog: any;
  id:any;
  constructor(private blogsRestService: BlogRestService,private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.gotoBlogDetails(this.id);
  }
  gotoBlogDetails(id: any) {
    this.blogsRestService.getBlog(id).subscribe(blog => {
      this.blog = blog;
      console.log(this.blog);
    })
  }
}
