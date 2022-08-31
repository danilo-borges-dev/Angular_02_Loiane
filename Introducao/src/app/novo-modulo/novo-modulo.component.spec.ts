import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoModuloComponent } from './novo-modulo.component';

describe('NovoModuloComponent', () => {
  let component: NovoModuloComponent;
  let fixture: ComponentFixture<NovoModuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoModuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoModuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
