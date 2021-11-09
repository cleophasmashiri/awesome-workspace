# Awaresomeco-carousel

Awaresomeco-carousel enables the quick creation of a carousel types of ui, it handles the navigination and touch/dragging side of the ui whilst leaving the html view and styling to you. 

## How to get started with Awaresomeco-carousel 

Github: [souce code](https://github.com/cleophasmashiri/awesome-workspace.git).

1. Install [awaresomeco-carousel](
https://www.npmjs.com/package/@cleophasmashiri1234/awaresomeco-carousel).

```
npm i @cleophasmashiri1234/awaresomeco-carousel

```

2. Create component: [example](https://github.com/cleophasmashiri/awesome-workspace/tree/master/src/app/demo-carousel).

```

<h3>Demo-carousel</h3>
<div class="content">
	<p class="title">Carousel!</p>
	<div class="demo-border">
		<awaresomeco-carousel class="demo-one" [drag-scroll-y-disabled]="true"
			[scrollbar-hidden]="true" (dsInitialized)="onDragScrollInitialized()"
			(indexChanged)="onIndexChanged($event)"
			(reachesLeftBound)="leftBoundStat($event)"
			(reachesRightBound)="rightBoundStat($event)"
			(snapAnimationFinished)="onSnapAnimationFinished()"
			(dragStart)="onDragStart()" (dragEnd)="onDragEnd()" #nav>

		<div class="carousel">
			<div class="carousel-item"
				*ngFor="let item of carouselItems;let i = index"
				[ngClass]="{'active': i===index+2, 'hidden': !item.image}"
				carousel-item>
				<div class="carousel-content">
					<div [hidden]="!item?.image">
						<img [src]="'assets/img/' + item?.image" alt="John" class="image">
					</div>
					<div [hidden]="!item?.image" class="title">{{item?.title}}</div>
					<div *ngIf="i===index+2 && item.image" class="action">
						<div class="start-here">
							<span>START HERE ▶︎</span>
						</div>
					</div>
					<div class="navigation-icons" *ngIf="i===index+2 && showNavIcons">
						<span (click)="moveLeft()" class="left"> <mat-icon
								class="mat-icon">arrow_circle_left</mat-icon>
						</span> <span (click)="moveRight()" class="right"> <mat-icon
								class="mat-icon">arrow_circle_right</mat-icon>
						</span>
					</div>
				</div>
			</div>
		</div>
		</awaresomeco-carousel>

	</div>
</div>

```

3. Add component.ts.

```


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


```



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
