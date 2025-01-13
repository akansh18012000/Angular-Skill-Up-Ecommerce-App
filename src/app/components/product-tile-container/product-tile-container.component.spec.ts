import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTileContainerComponent } from './product-tile-container.component';

describe('ProductTileContainerComponent', () => {
  let component: ProductTileContainerComponent;
  let fixture: ComponentFixture<ProductTileContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductTileContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductTileContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
