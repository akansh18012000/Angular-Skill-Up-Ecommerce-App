import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoaderService } from './services/loader/loader.service';
import { LoaderComponent } from './components/loader/loader.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, LoaderComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isLoading: boolean = false;
  constructor(private loaderService: LoaderService, private router: Router) {}
  ngOnInit(): void {
    this.loaderService.isLoading.subscribe((loading) => {
      this.isLoading = loading;
    });
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        !(this.router.url === '/cart' && !localStorage.getItem('cartId')) &&
          !(this.router.url === '/checkout') &&
          this.loaderService.show();
      }
    });
  }
}
