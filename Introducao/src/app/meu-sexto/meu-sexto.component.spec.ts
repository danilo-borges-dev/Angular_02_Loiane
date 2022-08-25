import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuSextoComponent } from './meu-sexto.component';

describe('MeuSextoComponent', () => {
  let component: MeuSextoComponent;
  let fixture: ComponentFixture<MeuSextoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeuSextoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeuSextoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
