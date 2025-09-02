import { Component, signal } from '@angular/core';
import { SearchingCities } from "./features/searching-cities/searching-cities";
import { Location } from "./features/location/location";

@Component({
  selector: 'app-root',
  imports: [SearchingCities, Location],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
