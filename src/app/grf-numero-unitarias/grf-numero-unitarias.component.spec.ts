import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrfNumeroUnitariasComponent } from './grf-numero-unitarias.component';

describe('GrfNumeroUnitariasComponent', () => {
  let component: GrfNumeroUnitariasComponent;
  let fixture: ComponentFixture<GrfNumeroUnitariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrfNumeroUnitariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrfNumeroUnitariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
