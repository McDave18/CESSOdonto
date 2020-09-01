import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Placadb3Component } from './placadb3.component';

describe('Placadb3Component', () => {
  let component: Placadb3Component;
  let fixture: ComponentFixture<Placadb3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Placadb3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Placadb3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
