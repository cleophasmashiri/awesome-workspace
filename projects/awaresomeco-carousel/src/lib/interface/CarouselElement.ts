export interface CarouselElement extends HTMLElement {
    parentNode: HTMLElement;
    cloneNode: (deep: boolean) => HTMLDivElement;
}