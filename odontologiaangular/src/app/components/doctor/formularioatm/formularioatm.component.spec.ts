import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioatmComponent } from './formularioatm.component';

describe('FormularioatmComponent', () => {
  let component: FormularioatmComponent;
  let fixture: ComponentFixture<FormularioatmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioatmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioatmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
