import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { orderConfirmationGuard } from './order-confirmation.guard';

describe('orderConfirmationGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => orderConfirmationGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
