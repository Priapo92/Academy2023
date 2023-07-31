import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapItalyComponent } from './map-italy.component';

describe('MapItalyComponent', () => {
  let component: MapItalyComponent;
  let fixture: ComponentFixture<MapItalyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MapItalyComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MapItalyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
