import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartTileComponent } from './shopping-cart-tile.component';

describe('ShoppingCartTileComponent', () => {
  let component: ShoppingCartTileComponent;
  let fixture: ComponentFixture<ShoppingCartTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingCartTileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingCartTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
