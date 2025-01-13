import { TestBed } from '@angular/core/testing';

import { CheckoutFormValidationService } from './checkout-form-validation.service';

describe('CheckoutFormValidationService', () => {
  let service: CheckoutFormValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutFormValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
