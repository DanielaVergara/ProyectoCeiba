import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrfHorasErrorComponent } from './grf-horas-error.component';

describe('GrfHorasErrorComponent', () => {
  let component: GrfHorasErrorComponent;
  let fixture: ComponentFixture<GrfHorasErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrfHorasErrorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrfHorasErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
