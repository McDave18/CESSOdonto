import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantratamientoComponent } from './plantratamiento.component';

describe('PlantratamientoComponent', () => {
  let component: PlantratamientoComponent;
  let fixture: ComponentFixture<PlantratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
