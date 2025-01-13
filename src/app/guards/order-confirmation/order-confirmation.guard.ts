import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const orderConfirmationGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const cartId = localStorage.getItem('cartId') || '';
  const shippingDetails = localStorage.getItem('shipping-details') || '';
  if (!(cartId && shippingDetails)) {
    router.navigate(['/']);
    return false;
  }
  return true;
};
