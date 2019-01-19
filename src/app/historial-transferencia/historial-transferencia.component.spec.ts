import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialTransferenciaComponent } from './historial-transferencia.component';

describe('HistorialTransferenciaComponent', () => {
  let component: HistorialTransferenciaComponent;
  let fixture: ComponentFixture<HistorialTransferenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorialTransferenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorialTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
