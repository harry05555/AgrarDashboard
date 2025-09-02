import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchingCities } from './searching-cities';

describe('SearchingCities', () => {
  let component: SearchingCities;
  let fixture: ComponentFixture<SearchingCities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchingCities],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchingCities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
