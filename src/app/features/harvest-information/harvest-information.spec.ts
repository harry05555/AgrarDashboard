import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarvestInformation } from './harvest-information';

describe('HarvestInformation', () => {
  let component: HarvestInformation;
  let fixture: ComponentFixture<HarvestInformation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HarvestInformation],
    }).compileComponents();

    fixture = TestBed.createComponent(HarvestInformation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
