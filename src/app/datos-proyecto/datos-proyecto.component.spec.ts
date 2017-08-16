import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosProyectoComponent } from './datos-proyecto.component';

describe('DatosProyectoComponent', () => {
  let component: DatosProyectoComponent;
  let fixture: ComponentFixture<DatosProyectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatosProyectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
