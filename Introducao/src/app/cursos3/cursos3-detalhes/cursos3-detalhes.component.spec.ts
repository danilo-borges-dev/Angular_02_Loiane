import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cursos3DetalhesComponent } from './cursos3-detalhes.component';

describe('Cursos3DetalhesComponent', () => {
  let component: Cursos3DetalhesComponent;
  let fixture: ComponentFixture<Cursos3DetalhesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cursos3DetalhesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cursos3DetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
