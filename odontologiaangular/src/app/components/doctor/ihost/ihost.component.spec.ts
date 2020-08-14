import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IhostComponent } from './ihost.component';

describe('IhostComponent', () => {
  let component: IhostComponent;
  let fixture: ComponentFixture<IhostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IhostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IhostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
