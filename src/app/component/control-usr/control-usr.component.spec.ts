import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlUSRComponent } from './control-usr.component';

describe('ControlUSRComponent', () => {
  let component: ControlUSRComponent;
  let fixture: ComponentFixture<ControlUSRComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlUSRComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlUSRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
