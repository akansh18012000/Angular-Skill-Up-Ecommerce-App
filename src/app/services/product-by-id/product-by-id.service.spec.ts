import { TestBed } from '@angular/core/testing';

import { ProductByIdService } from './product-by-id.service';

describe('ProductByIdService', () => {
  let service: ProductByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
