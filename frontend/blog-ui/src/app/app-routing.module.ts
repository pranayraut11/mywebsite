import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './feature/blog/component/details/blog.details.component';
import { BlogListComponent } from './feature/blog/component/blog-list/blog.list.component';
import { FeaturedListBlogComponent } from './feature/blog/component/featured-list-blog/featured-list-blog.component';

const routes: Routes = [
  {path:"home",component:FeaturedListBlogComponent, pathMatch: 'prefix'},
  {path:"blogs/:id",component:BlogDetailsComponent, pathMatch: 'prefix'},
  {path:"blogs",component:BlogListComponent, pathMatch: 'prefix'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

  

 }
