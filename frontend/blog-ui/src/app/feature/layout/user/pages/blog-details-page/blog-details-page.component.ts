import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogRestService } from 'src/app/rest-services/blog-rest.service';

@Component({
  selector: 'app-blog-page.details',
  templateUrl: './blog-details-page.component.html',
  styleUrls: ['./blog-details-page.component.scss']
})
export class BlogDetailsPageComponent implements OnInit {
  blog: any;
  id:any;
  constructor(private blogsRestService: BlogRestService,private route:ActivatedRoute) {

  }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    this.gotoBlogDetails(this.id);
    window.scrollTo(0, 0);
  }
  gotoBlogDetails(id: any) {
    this.blogsRestService.getBlog(id).subscribe(blog => {
      this.blog = blog;
      console.log(this.blog);
    })
  }
}
