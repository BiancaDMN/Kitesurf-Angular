import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileFavouriteComponent } from './mobile-favourite.component';

describe('MobileFavouriteComponent', () => {
  let component: MobileFavouriteComponent;
  let fixture: ComponentFixture<MobileFavouriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileFavouriteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileFavouriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
