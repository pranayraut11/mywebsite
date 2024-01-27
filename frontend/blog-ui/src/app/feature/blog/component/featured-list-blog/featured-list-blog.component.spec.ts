import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedListBlogComponent } from './featured-list-blog.component';

describe('FeaturedListBlogComponent', () => {
  let component: FeaturedListBlogComponent;
  let fixture: ComponentFixture<FeaturedListBlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedListBlogComponent]
    });
    fixture = TestBed.createComponent(FeaturedListBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
