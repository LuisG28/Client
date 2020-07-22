import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUsrComponent } from './form-usr.component';

describe('FormUsrComponent', () => {
  let component: FormUsrComponent;
  let fixture: ComponentFixture<FormUsrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUsrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
