import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {
  @HostBinding('style.background') background: string;
  @Input('appBackground') hoverColor: string = "green";
  @Input() defaultColor: string = "transparent";
  constructor() { }
  ngOnInit() {
    this.background = this.defaultColor;
  }
  @HostListener('mouseenter') mouseEnter() {
    this.background = this.hoverColor;
  }
  @HostListener('mouseleave') mouseleave() {
    this.background = this.defaultColor;
  }
}
