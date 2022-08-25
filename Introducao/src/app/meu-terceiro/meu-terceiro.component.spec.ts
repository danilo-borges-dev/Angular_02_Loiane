import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuTerceiroComponent } from './meu-terceiro.component';

describe('MeuTerceiroComponent', () => {
  let component: MeuTerceiroComponent;
  let fixture: ComponentFixture<MeuTerceiroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuTerceiroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuTerceiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
