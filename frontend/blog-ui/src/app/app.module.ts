import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './feature/layout/user/pages/home/home.component';
import { HeaderComponent } from './feature/layout/user/components/header/header.component';
import { FooterComponent } from './feature/layout/user/components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateBlogComponent} from './feature/blog/component/create-blog/create-blog.component';
import { BlogListComponent } from './feature/blog/component/blog-list/blog.list.component';
import { BlogDetailsComponent } from './feature/blog/component/details/blog.details.component';
import { FeaturedblogComponent } from './feature/blog/component/featured-blog/featured-blog.component';
import { FeaturedListBlogComponent } from './feature/blog/component/featured-list-blog/featured-list-blog.component';
import { SimpleHeaderComponent } from './feature/layout/user/components/simple-header/simple-header.component';
import { BlogDetailsPageComponent } from './feature/layout/user/pages/blog-details-page/blog-details-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CreateBlogComponent,
    BlogListComponent,
    BlogDetailsComponent,
    FeaturedblogComponent,
    FeaturedListBlogComponent,
    SimpleHeaderComponent,
    BlogDetailsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
