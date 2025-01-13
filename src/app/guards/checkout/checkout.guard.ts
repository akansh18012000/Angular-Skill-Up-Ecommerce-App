import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const checkoutGuard: CanActivateFn = () => {
  const router = inject(Router);
  const cartId = localStorage.getItem('cartId') || '';
  if (!cartId) {
    router.navigate(['/cart']);
    return false;
  }
  return true;
};
