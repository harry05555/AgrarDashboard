import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherNow } from './weather-now';

describe('WeatherNow', () => {
  let component: WeatherNow;
  let fixture: ComponentFixture<WeatherNow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherNow],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherNow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
