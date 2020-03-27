import {Directive, ElementRef, OnDestroy} from '@angular/core';

@Directive({
  selector: '[appAutoScroll]'
})
export class AutoScrollDirective implements OnDestroy {

  private readonly changes: MutationObserver;
  private readonly element: HTMLElement;

  constructor(private el: ElementRef) {
    this.element = this.el.nativeElement;

    this.changes = new MutationObserver(() => {
      this.scrollToBottom();
    });

    this.changes.observe(this.element, {childList: true});
  }

  ngOnDestroy(): void {
    this.changes.disconnect();
  }

  private scrollToBottom(): void {
    this.element.scrollTo({behavior: 'smooth', top: this.calculateScrollToBottom()});
  }

  private calculateScrollToBottom(): number {
    return Math.max(0, this.element.scrollHeight - this.element.offsetHeight);
  }
}
