import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrfPuntosComponent } from './grf-puntos.component';

describe('GrfPuntosComponent', () => {
  let component: GrfPuntosComponent;
  let fixture: ComponentFixture<GrfPuntosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrfPuntosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrfPuntosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
