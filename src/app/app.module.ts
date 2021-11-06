import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwaresomecoCarouselModule } from 'awaresomeco-carousel';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AwaresomecoCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
