import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrfAdherenciaComponent } from './grf-adherencia.component';

describe('GrfAdherenciaComponent', () => {
  let component: GrfAdherenciaComponent;
  let fixture: ComponentFixture<GrfAdherenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrfAdherenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrfAdherenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
