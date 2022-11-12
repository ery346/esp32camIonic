import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[updatedColorBorder]'
})
export class UpdatedColorChangeDirective implements OnChanges{
  htmlElemento!: ElementRef<HTMLElement>;
  @Input()changedValue: string | number | boolean;
  @Input()styleValue: boolean;
  constructor(private el: ElementRef<HTMLElement>) { 
    this.htmlElemento = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
   if (changes.changedValue) {
    // this.htmlElemento.nativeElement.style.borderBottom =  '2   px solid rgb(138, 138, 138);'
    this.htmlElemento.nativeElement.style.borderColor = 'yellow';
    setTimeout(() => {
      this.htmlElemento.nativeElement.style.borderColor  = 'black';
    }, 1000);
   }

   if (changes.styleValue) {
    if (this.styleValue) {
      this.htmlElemento.nativeElement.style.border = '3px solid yellow';
      this.htmlElemento.nativeElement.style.borderRadius = '4px';
      this.htmlElemento.nativeElement.style.backgroundColor = 'rgba(247, 247, 164, 0.501)';    
     
    } else {
      this.htmlElemento.nativeElement.style.border = '';
      this.htmlElemento.nativeElement.style.borderRadius = '4px';
      this.htmlElemento.nativeElement.style.backgroundColor = '';    
     
    }
   }
  }


}
