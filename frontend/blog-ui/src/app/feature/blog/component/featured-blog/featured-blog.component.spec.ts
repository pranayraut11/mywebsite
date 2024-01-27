import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedblogComponent } from './featured-blog.component';

describe('FeaturedblogComponent', () => {
  let component: FeaturedblogComponent;
  let fixture: ComponentFixture<FeaturedblogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeaturedblogComponent]
    });
    fixture = TestBed.createComponent(FeaturedblogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
