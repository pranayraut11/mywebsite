import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogRestService } from 'src/app/rest-services/blog-rest.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog.details.component.html',
  styleUrls: ['./blog.details.component.scss']
})
export class BlogDetailsComponent {
  @Input() blog: any; 
}
