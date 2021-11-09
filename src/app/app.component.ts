import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'app works!';
  hideScrollbar: any;
  disabled: any;
  xDisabled: any;
  yDisabled: any;
  imagelist = [
    'luke.png',
    'chubaka.png',
    'boba.png',
    'c3po.png' ,
    'leia.png',
    'obi.png',
    'r2d2.png',
    'storm.png',
    'varder.png',
    'yoda.png',
    'yolo.png'
  ];
  leftNavDisabled = false;
  rightNavDisabled = false;
  index = 0;

  constructor(
    sanitizer: DomSanitizer
  ) {
  
  }

  ngOnInit() {
    //this.moveTo(2); 
  }


}
