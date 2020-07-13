import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IHOSComponent } from './ihos.component';

describe('IHOSComponent', () => {
  let component: IHOSComponent;
  let fixture: ComponentFixture<IHOSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IHOSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IHOSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
