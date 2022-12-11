import { Directive, ElementRef, Renderer2  } from '@angular/core';

@Directive({
  selector: '[appUpperCaseText]'
})
export class UpperCaseTextDirective {

  constructor(renderer: Renderer2, elmRef: ElementRef) {
    renderer.setStyle(elmRef.nativeElement, 'text-transform', 'uppercase');
   }
  
}
