import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-header',
  imports: [MatIconModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  totalItems: number = 0;
  url: string = '';
  constructor(private cartService: CartService, private router: Router) {}
  ngOnInit(): void {
    this.cartService.totalItems.subscribe((totalItems) => {
      this.totalItems = totalItems;
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.url = this.router.url;
      }
    });
  }
}
