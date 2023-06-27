import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpotButtonComponent } from './add-spot-button.component';

describe('AddSpotButtonComponent', () => {
  let component: AddSpotButtonComponent;
  let fixture: ComponentFixture<AddSpotButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpotButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSpotButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
