import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrfHorasExtraComponent } from './grf-horas-extra.component';

describe('GrfHorasExtraComponent', () => {
  let component: GrfHorasExtraComponent;
  let fixture: ComponentFixture<GrfHorasExtraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrfHorasExtraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrfHorasExtraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
