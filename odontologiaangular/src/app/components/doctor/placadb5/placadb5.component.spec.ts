import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Placadb5Component } from './placadb5.component';

describe('Placadb5Component', () => {
  let component: Placadb5Component;
  let fixture: ComponentFixture<Placadb5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Placadb5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Placadb5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
