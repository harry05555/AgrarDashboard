import { Component, signal } from '@angular/core';
import { SearchingCities } from "./features/searching-cities/searching-cities";

@Component({
  selector: 'app-root',
  imports: [SearchingCities],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
