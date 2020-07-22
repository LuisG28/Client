import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustificantesComponent } from './justificantes.component';

describe('JustificantesComponent', () => {
  let component: JustificantesComponent;
  let fixture: ComponentFixture<JustificantesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustificantesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustificantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
