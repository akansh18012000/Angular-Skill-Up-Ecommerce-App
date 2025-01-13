import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartTileContainerComponent } from './shopping-cart-tile-container.component';

describe('ShoppingCartTileContainerComponent', () => {
  let component: ShoppingCartTileContainerComponent;
  let fixture: ComponentFixture<ShoppingCartTileContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartTileContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartTileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
