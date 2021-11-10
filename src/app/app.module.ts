import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button'
import {MatCardModule} from '@angular/material/card';
import { DemoCarouselComponent } from './demo-carousel/demo-carousel.component';
import { MatBadgeModule } from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { AwaresomecoCarouselModule } from 'awaresomeco-carousel';

@NgModule({
  declarations: [
    AppComponent,
    DemoCarouselComponent,
    DemoCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AwaresomecoCarouselModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatBadgeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
