import { Directive, ElementRef, HostBinding, Inject, Input } from "@angular/core";

@Directive({
    selector: '[carousel-item]'
})
export class CarouselItemDirective {

    @HostBinding('style.display')
    display = 'inline-block';

    @Input('drag-disabled')
    get dragDisabled() { return this._dragDisabled; }
    set dragDisabled(value: boolean) { this._dragDisabled = value; }

    _dragDisabled = false;

    _elementRef: ElementRef;

    constructor(
        @Inject(ElementRef) elementRef: ElementRef,
    ) {
        this._elementRef = elementRef;
    }
}