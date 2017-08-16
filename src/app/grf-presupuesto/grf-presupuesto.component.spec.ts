import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrfPresupuestoComponent } from './grf-presupuesto.component';

describe('GrfPresupuestoComponent', () => {
  let component: GrfPresupuestoComponent;
  let fixture: ComponentFixture<GrfPresupuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrfPresupuestoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrfPresupuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
