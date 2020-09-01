import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Placadb4Component } from './placadb4.component';

describe('Placadb4Component', () => {
  let component: Placadb4Component;
  let fixture: ComponentFixture<Placadb4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Placadb4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Placadb4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
