import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouriteSpotButtonComponent } from './favourite-spot-button.component';

describe('FavouriteSpotButtonComponent', () => {
  let component: FavouriteSpotButtonComponent;
  let fixture: ComponentFixture<FavouriteSpotButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavouriteSpotButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavouriteSpotButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
