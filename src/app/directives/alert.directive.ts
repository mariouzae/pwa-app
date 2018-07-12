import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[alert]'
})

export class AlertDirective {
    constructor(private el: ElementRef) { }

    @HostListener('mouseover') onHover() {
        window.alert("hover");
    }
}