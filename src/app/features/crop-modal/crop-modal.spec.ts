import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropModal } from './crop-modal';

describe('CropModal', () => {
  let component: CropModal;
  let fixture: ComponentFixture<CropModal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CropModal],
    }).compileComponents();

    fixture = TestBed.createComponent(CropModal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
