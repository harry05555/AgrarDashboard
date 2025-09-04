import { Injectable } from '@angular/core';
import { CityCoordinatesService } from '../citycoordinates/city-coordinates-service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private cityCoordinatesService:CityCoordinatesService){}
}
