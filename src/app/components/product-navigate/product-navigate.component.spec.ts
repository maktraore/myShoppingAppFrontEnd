import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductNavigateComponent } from './product-navigate.component';

describe('ProductNavigateComponent', () => {
  let component: ProductNavigateComponent;
  let fixture: ComponentFixture<ProductNavigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductNavigateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductNavigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
