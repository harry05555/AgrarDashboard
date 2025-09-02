import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CultivatedPlants } from './cultivated-plants';

describe('CultivatedPlants', () => {
  let component: CultivatedPlants;
  let fixture: ComponentFixture<CultivatedPlants>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CultivatedPlants]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CultivatedPlants);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
