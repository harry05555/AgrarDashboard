import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherTomorrow } from './weather-tomorrow';

describe('WeatherTomorrow', () => {
  let component: WeatherTomorrow;
  let fixture: ComponentFixture<WeatherTomorrow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherTomorrow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherTomorrow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
