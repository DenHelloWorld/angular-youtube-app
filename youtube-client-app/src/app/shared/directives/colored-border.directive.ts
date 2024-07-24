import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appColoredBorder]',
  standalone: true,
})
export default class ColoredBorderDirective {
  @Input() public set appColoredBorder(publicationDate: string) {
    const currentDate = new Date();
    const publishedDate = new Date(publicationDate);
    const timeDifference = currentDate.getTime() - publishedDate.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    let borderColor = 'transparent';

    if (daysDifference > 180) {
      borderColor = 'red';
    } else if (daysDifference > 30) {
      borderColor = 'yellow';
    } else if (daysDifference > 7) {
      borderColor = 'green';
    } else {
      borderColor = 'blue';
    }

    this.renderer.setStyle(
      this.el.nativeElement,
      'box-shadow',
      `0px 11px 17px -7px ${borderColor}`,
    );
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
