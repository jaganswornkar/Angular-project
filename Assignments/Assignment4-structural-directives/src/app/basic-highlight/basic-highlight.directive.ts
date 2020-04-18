import { OnInit, Directive, ElementRef } from '@angular/core';

@Directive({
    selector: "[appBasicHighlight]"
})
export class BasicHighlibhtDirectve implements OnInit {
    constructor(private elementRef: ElementRef) {

    }
    ngOnInit() {
        this.elementRef.nativeElement.style.backgroundColor = "lightgreen";
    }
}