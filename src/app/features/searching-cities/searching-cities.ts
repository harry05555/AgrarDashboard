import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SearchingDataInterface } from './searching-data-interface.data';

@Component({
  selector: 'app-searching-cities',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './searching-cities.html',
  styleUrl: './searching-cities.css',
})
export class SearchingCities {
  formData = signal<SearchingDataInterface>({
    searchCitiy: '',
  });

  onSubmit() {
    console.log('Form submitted:', this.formData());
  }
}
