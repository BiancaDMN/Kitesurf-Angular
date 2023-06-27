import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAddSpotComponent } from './mobile-add-spot.component';

describe('MobileAddSpotComponent', () => {
  let component: MobileAddSpotComponent;
  let fixture: ComponentFixture<MobileAddSpotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileAddSpotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileAddSpotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
