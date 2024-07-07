import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appColoredBorder]',
  standalone: true,
})
export default class ColoredBorderDirective {

  @Input() set appColoredBorder(publicationDate: string) {
    const currentDate = new Date();
    const publicationDateObj = new Date(publicationDate);

    if (isNaN(publicationDateObj.getTime())) {
      console.error('Invalid date format');
      return;
    }

    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(currentDate.getMonth() - 6);

    let borderColor = 'blue';
    if (publicationDateObj < sixMonthsAgo) {
      borderColor = 'red';
    } else if (publicationDateObj < currentDate) {
      borderColor = 'yellow';
    } else if (publicationDateObj >= currentDate) {
      borderColor = 'green';
    }

    this.renderer.setStyle(this.el.nativeElement, 'border-bottom', `5px solid ${borderColor}`);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}
}
