import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacadbtComponent } from './placadbt.component';

describe('PlacadbtComponent', () => {
  let component: PlacadbtComponent;
  let fixture: ComponentFixture<PlacadbtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacadbtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacadbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
