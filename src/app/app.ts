import { Component, signal } from '@angular/core';
import { SearchingCities } from './features/searching-cities/searching-cities';
import { Location } from './features/location/location';
import { WeatherForecast } from './features/weather-forecast/weather-forecast';
import { CultivatedPlants } from './features/cultivated-plants/cultivated-plants';
import { HarvestInformation } from './features/harvest-information/harvest-information';
import { Precipitation } from './features/precipitation/precipitation';
import { GrainFieldMap } from "./features/grain-field-map/grain-field-map";

@Component({
  selector: 'app-root',
  imports: [
    SearchingCities,
    Location,
    WeatherForecast,
    CultivatedPlants,
    HarvestInformation,
    Precipitation,
    GrainFieldMap
],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
