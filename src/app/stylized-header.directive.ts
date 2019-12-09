import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStylizedHeader]'
})
export class StylizedHeaderDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.color = 'red';
  }

}
