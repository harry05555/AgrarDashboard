import { Component, signal } from '@angular/core';
import { SearchingCities } from './features/searching-cities/searching-cities';
import { Location } from './features/location/location';
import { WeatherForecast } from './features/weather-forecast/weather-forecast';

@Component({
  selector: 'app-root',
  imports: [SearchingCities, Location, WeatherForecast],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
