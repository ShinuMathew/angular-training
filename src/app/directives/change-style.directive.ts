import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[changeStyle]'
})
export class ChangeStyleDirective {

  constructor(private ele : ElementRef) {
    
  }

  @HostListener('click')
  onClick() {
    this.ele.nativeElement.style['font-style'] = 'italic';
  }

}
