import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { AwaresomecoCarouselComponent } from 'awaresomeco-carousel';

@Component({
  selector: 'app-demo-carousel',
  templateUrl: './demo-carousel.component.html',
  styleUrls: ['./demo-carousel.component.css']
})
export class DemoCarouselComponent implements AfterViewInit {
  title = 'app works!';
  hideScrollbar: any;
  disabled: any;
  xDisabled: any;
  yDisabled: any;
  carouselItems = [{ image: '', title: '' }, { image: '', title: '' }, { image: 'luke.png', title: 'Mobile internet' },
  { image: 'chubaka.png', title: 'Add a phone-line' },
  { image: 'boba.png', title: 'Get a device' },
  { image: 'c3po.png', title: 'Upgrade' },
  { image: 'leia.png', title: 'Home internet' },
  { image: 'obi.png', title: 'Upgrade 6' },
  { image: 'r2d2.png', title: 'Upgrade 7' },
  { image: 'storm.png', title: 'Upgrade 8' },
  { image: 'varder.png', title: 'Upgrade 9' },
  { image: 'yoda.png', title: 'Upgrade 10' },
  { image: 'yolo.png', title: 'Upgrade 11' }, { image: '', title: '' }, { image: '', title: '' }]

  leftNavDisabled = false;
  rightNavDisabled = false;
  index = 0;

  @ViewChild('nav', { read: AwaresomecoCarouselComponent, static: true })
  ds!: AwaresomecoCarouselComponent;
  showNavIcons: boolean = true;

  constructor(
    matIconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    matIconRegistry
      .addSvgIcon('github',
        sanitizer.bypassSecurityTrustResourceUrl('/assets/img/github.svg'))
      .registerFontClassAlias('fontawesome', 'fa');
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // Starting ngx-drag-scroll from specified index(3)
    setTimeout(() => {
      this.ds.moveTo(2);
    }, 0);
  }

  clickItem(item: any) {
    console.log('item clicked');
  }

  remove() {
    //this.imagelist.pop();
  }

  toggleHideSB() {
    this.hideScrollbar = !this.hideScrollbar;
  }

  toggleDisable() {
    this.disabled = !this.disabled;
  }
  toggleXDisable() {
    this.xDisabled = !this.xDisabled;
  }
  toggleYDisable() {
    this.yDisabled = !this.yDisabled;
  }

  moveLeft() {
    this.ds.moveLeft();
  }

  moveRight() {
    this.ds.moveRight();
  }

  moveTo(idx: number) {
    this.ds.moveTo(idx);
  }

  leftBoundStat(reachesLeftBound: boolean) {
    this.leftNavDisabled = reachesLeftBound;
  }

  rightBoundStat(reachesRightBound: boolean) {
    this.rightNavDisabled = reachesRightBound;
  }

  onSnapAnimationFinished() {
    console.log('snap animation finished');
  }

  onIndexChanged(idx: any) {
    this.index = idx;
    this.showNavIcons = false;
    setTimeout(() => {
      this.showNavIcons = true;
    }, 100);
  }

  onDragScrollInitialized() {
    console.log('first demo drag scroll has been initialized.');
  }

  onDragStart() {
    console.log('drag start');
  }

  onDragEnd() {
    console.log('drag end');
  }
}