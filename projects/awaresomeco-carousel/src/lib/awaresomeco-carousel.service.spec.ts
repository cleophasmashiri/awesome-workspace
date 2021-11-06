import { TestBed } from '@angular/core/testing';

import { AwaresomecoCarouselService } from './awaresomeco-carousel.service';

describe('AwaresomecoCarouselService', () => {
  let service: AwaresomecoCarouselService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AwaresomecoCarouselService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
