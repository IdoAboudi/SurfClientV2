import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsByCountryComponent } from './products-by-country.component';

describe('ProductsByCountryComponent', () => {
  let component: ProductsByCountryComponent;
  let fixture: ComponentFixture<ProductsByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
