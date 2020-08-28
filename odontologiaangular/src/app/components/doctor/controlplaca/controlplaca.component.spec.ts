import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlplacaComponent } from './controlplaca.component';

describe('ControlplacaComponent', () => {
  let component: ControlplacaComponent;
  let fixture: ComponentFixture<ControlplacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlplacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlplacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
