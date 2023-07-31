import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoPrdComponent } from './info-prd.component';

describe('InfoPrdComponent', () => {
  let component: InfoPrdComponent;
  let fixture: ComponentFixture<InfoPrdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoPrdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoPrdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
