import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Placadb7Component } from './placadb7.component';

describe('Placadb7Component', () => {
  let component: Placadb7Component;
  let fixture: ComponentFixture<Placadb7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Placadb7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Placadb7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
