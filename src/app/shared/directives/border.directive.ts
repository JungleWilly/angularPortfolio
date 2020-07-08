import {
  Directive,
  HostBinding,
  Input,
  OnInit,
  ElementRef,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[color]',
})
export class BorderDirective implements OnInit {
  @HostBinding('style.borderColor') color;
  @Input('color') data;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.color = this.data.text;
  }
}
