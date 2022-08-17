import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';

@Directive({
  selector: '[overUpb]',
})
export class OverUpbDirective implements OnInit {
  @Input() overUpb!: string;

  @Output() sendMessage = new EventEmitter<any>();

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor = 'orange';
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(event: any) {
    this.element.nativeElement.style.backgroundColor = 'green';

    console.log('event al salir:', event);

    this.sendMessage.emit({
      id: 0,
      text: 'saliste del evento',
      x: event.x,
      y: event.y,
    });
  }

  constructor(private element: ElementRef) {}

  ngOnInit(): void {
    console.log(this.element);
    this.element.nativeElement.style.backgroundColor = this.overUpb;
  }
}
