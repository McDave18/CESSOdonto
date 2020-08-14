import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacadbComponent } from './placadb.component';

describe('PlacadbComponent', () => {
  let component: PlacadbComponent;
  let fixture: ComponentFixture<PlacadbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacadbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacadbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
