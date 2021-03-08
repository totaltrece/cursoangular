import { TestBed } from '@angular/core/testing';

import { BookClickedService } from './book-clicked.service';

describe('BookClickedService', () => {
  let service: BookClickedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookClickedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
