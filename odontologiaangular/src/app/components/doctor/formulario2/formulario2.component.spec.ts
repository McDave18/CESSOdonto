import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario2Component } from './formulario2.component';

describe('Formulario2Component', () => {
  let component: Formulario2Component;
  let fixture: ComponentFixture<Formulario2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formulario2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
