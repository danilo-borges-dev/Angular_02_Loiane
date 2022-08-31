import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Curso2Component } from './curso2.component';

describe('Curso2Component', () => {
  let component: Curso2Component;
  let fixture: ComponentFixture<Curso2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Curso2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Curso2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
