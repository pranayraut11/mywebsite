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
  blog: any;
  totalPages : any;
  pageSize = 1;
  selectedPageNumber=0;
  isFirstPage = false;
  isLastPage = false;
  constructor(private blogsRestService: BlogRestService, private route: Router) {

  }
  ngOnInit(): void {
    this.getBlogs(0);
  }

  gotoBlogDetails(id: any) {
    this.route.navigate(["blogs/" + id]);
  }

  getBlogs(pageNumber:number) {
    this.blogsRestService.getAllBlogs(pageNumber,this.pageSize).subscribe(response => {
      this.blogs = response.content;
      this.totalPages = response.totalPages;
      this.isFirstPage = response.first;
      this.isLastPage = response.last;
        console.log(this.blogs);
    })
  }

  counter(i: number) {
    return new Array(i);
  }

  selectPage(pageNumber:number){
    this.selectedPageNumber = pageNumber;
    this.getBlogs(pageNumber);
  }

  nextPage(){
    this.selectedPageNumber = this.selectedPageNumber+1;
    this.getBlogs(this.selectedPageNumber)
  }

  
  previousPage(){
    this.selectedPageNumber = this.selectedPageNumber-1;
    this.getBlogs(this.selectedPageNumber)
  }

}
