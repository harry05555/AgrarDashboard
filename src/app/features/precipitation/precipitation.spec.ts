import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Precipitation } from './precipitation';

describe('Precipitation', () => {
  let component: Precipitation;
  let fixture: ComponentFixture<Precipitation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Precipitation],
    }).compileComponents();

    fixture = TestBed.createComponent(Precipitation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
