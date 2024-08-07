import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[getFocus]',
  standalone: true
})
export class GetFocusDirective {
  private el: ElementRef;
  constructor( el: ElementRef) {

    this.el = el;
    this.el.nativeElement.focus();
  }

}
