import { Directive, ElementRef, Renderer2, OnInit, HostListener, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appAdvancedHighlight]'
})
export class AdvancedHighlightDirective implements OnInit {

  // tslint:disable-next-line: no-inferrable-types
  @Input() defultColor: string = 'black';
  // tslint:disable-next-line: no-inferrable-types
  @Input() highlightColor: string = 'white' ;

  @HostBinding('style.color') c: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.c = this.defultColor;

  }

  @HostListener('mouseenter') me(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.c = this.highlightColor;
  }

  @HostListener('mouseleave') ml(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'white');
    this.c = this.defultColor;
  }

}
