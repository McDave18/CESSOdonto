import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlpagosComponent } from './controlpagos.component';

describe('ControlpagosComponent', () => {
  let component: ControlpagosComponent;
  let fixture: ComponentFixture<ControlpagosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlpagosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlpagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
