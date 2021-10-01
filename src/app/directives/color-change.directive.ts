import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColorChange]'
})
export class ColorChangeDirective {

  constructor(private ele : ElementRef) {
    
  }

  @HostListener('click')
  onClick() {    
    this.ele.nativeElement.style.color = 'blue'
  }


}

// ngFor, ngIf, ngClass, ngStyle, ngSwitch, ngSubmit, ngModel, 