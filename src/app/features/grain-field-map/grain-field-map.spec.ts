import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrainFieldMap } from './grain-field-map';

describe('GrainFieldMap', () => {
  let component: GrainFieldMap;
  let fixture: ComponentFixture<GrainFieldMap>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrainFieldMap],
    }).compileComponents();

    fixture = TestBed.createComponent(GrainFieldMap);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
