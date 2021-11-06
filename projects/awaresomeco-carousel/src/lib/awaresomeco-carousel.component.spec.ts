import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwaresomecoCarouselComponent } from './awaresomeco-carousel.component';

describe('AwaresomecoCarouselComponent', () => {
  let component: AwaresomecoCarouselComponent;
  let fixture: ComponentFixture<AwaresomecoCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwaresomecoCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwaresomecoCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
