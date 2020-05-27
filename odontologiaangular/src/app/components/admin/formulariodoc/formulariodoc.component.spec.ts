import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariodocComponent } from './formulariodoc.component';

describe('FormulariodocComponent', () => {
  let component: FormulariodocComponent;
  let fixture: ComponentFixture<FormulariodocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulariodocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulariodocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
