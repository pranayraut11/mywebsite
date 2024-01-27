import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { BlogRestService } from 'src/app/rest-services/blog-rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  constructor(private router:Router){}

  ngOnInit(): void {
    this.router.navigate(["home"])
  }
}
