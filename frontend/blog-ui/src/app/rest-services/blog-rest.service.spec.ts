import { TestBed } from '@angular/core/testing';

import { BlogRestService } from './blog-rest.service';

describe('BlogServiceService', () => {
  let service: BlogRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
