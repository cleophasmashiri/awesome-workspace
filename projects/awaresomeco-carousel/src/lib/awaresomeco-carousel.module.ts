import { NgModule } from '@angular/core';
import { CarouselItemDirective } from './carousel-item.directive';
import { AwaresomecoCarouselComponent } from './awaresomeco-carousel.component';

@NgModule({
  declarations: [
    AwaresomecoCarouselComponent,
    CarouselItemDirective,
  ],
  imports: [
  ],
  exports: [
    AwaresomecoCarouselComponent,
    CarouselItemDirective
  ]
})
export class AwaresomecoCarouselModule { }
