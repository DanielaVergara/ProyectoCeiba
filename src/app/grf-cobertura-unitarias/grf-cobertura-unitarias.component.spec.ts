import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrfCoberturaUnitariasComponent } from './grf-cobertura-unitarias.component';

describe('GrfCoberturaUnitariasComponent', () => {
  let component: GrfCoberturaUnitariasComponent;
  let fixture: ComponentFixture<GrfCoberturaUnitariasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrfCoberturaUnitariasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrfCoberturaUnitariasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
