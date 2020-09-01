import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Placadb6Component } from './placadb6.component';

describe('Placadb6Component', () => {
  let component: Placadb6Component;
  let fixture: ComponentFixture<Placadb6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Placadb6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Placadb6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
