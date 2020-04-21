import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientesComponent } from './pacientes.component';

describe('PacientesComponent', () => {
  let component: PacientesComponent;
  let fixture: ComponentFixture<PacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
