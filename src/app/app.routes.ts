import { Routes } from '@angular/router';
import { ProductTileContainerComponent } from './components/product-tile-container/product-tile-container.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { checkoutGuard } from './guards/checkout/checkout.guard';
import { orderConfirmationGuard } from './guards/order-confirmation/order-confirmation.guard';

export const routes: Routes = [
  {
    path: '',
    component: ProductTileContainerComponent,
    children: [
      { path: "men's-clothing", component: ProductTileContainerComponent },
      { path: "women's-clothing", component: ProductTileContainerComponent },
      { path: 'jewelery', component: ProductTileContainerComponent },
      { path: 'electronics', component: ProductTileContainerComponent },
    ],
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'cart',
    component: ShoppingCartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
    canActivate: [checkoutGuard],
  },
  {
    path: 'order-confirmation',
    component: OrderConfirmationComponent,
    canActivate: [orderConfirmationGuard],
  },
];
