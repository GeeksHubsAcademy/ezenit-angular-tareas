import { Directive , ElementRef, Input, OnChanges} from '@angular/core';

@Directive({
  selector: '[background]',
  standalone: true
})
export class BackgroundDirective implements OnChanges {
  @Input() background: string = 'transparent';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.backgroundColor = this.background;
  }
}
