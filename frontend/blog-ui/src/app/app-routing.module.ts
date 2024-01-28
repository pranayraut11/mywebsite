import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './feature/blog/component/blog-list/blog.list.component';
import { HomeComponent } from './feature/layout/user/pages/home/home.component';
import { BlogDetailsPageComponent } from './feature/layout/user/pages/blog-details-page/blog-details-page.component';
import { CreateBlogComponent } from './feature/blog/component/create-blog/create-blog.component';

const routes: Routes = [
  {path:"home",component:HomeComponent, pathMatch: 'prefix'},
  {path:"",component:HomeComponent, pathMatch: 'prefix'},
  {path:"blogs/:id",component:BlogDetailsPageComponent, pathMatch: 'prefix'},
  {path:"blogs",component:BlogListComponent, pathMatch: 'prefix'},
  {path:"create",component:CreateBlogComponent, pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

 }
