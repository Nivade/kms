import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appListItemHighlight]'
})
export class LocationListItemEffectDirective {
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('rgba(0,0,0,.5)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  constructor(private el: ElementRef) {
  }



  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
