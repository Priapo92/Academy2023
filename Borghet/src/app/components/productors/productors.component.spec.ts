import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductorsComponent } from './productors.component';

describe('ProductorsComponent', () => {
  let component: ProductorsComponent;
  let fixture: ComponentFixture<ProductorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
