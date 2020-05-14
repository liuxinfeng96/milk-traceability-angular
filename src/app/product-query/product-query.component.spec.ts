import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductQueryComponent } from './product-query.component';

describe('ProductQueryComponent', () => {
  let component: ProductQueryComponent;
  let fixture: ComponentFixture<ProductQueryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductQueryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
