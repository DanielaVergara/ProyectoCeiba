import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrfEsfuerzoComponent } from './grf-esfuerzo.component';

describe('GrfEsfuerzoComponent', () => {
  let component: GrfEsfuerzoComponent;
  let fixture: ComponentFixture<GrfEsfuerzoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrfEsfuerzoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrfEsfuerzoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
