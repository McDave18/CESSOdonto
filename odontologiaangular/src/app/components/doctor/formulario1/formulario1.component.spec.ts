import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formulario1Component } from './formulario1.component';

describe('Formulario1Component', () => {
  let component: Formulario1Component;
  let fixture: ComponentFixture<Formulario1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formulario1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formulario1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
