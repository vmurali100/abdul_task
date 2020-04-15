import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appCustomdate]",
})
export class CustomdateDirective {
  constructor(private el: ElementRef) {}

  @HostListener("input", ["$event"]) onInputChange(event) {
    let initialValue = this.el.nativeElement.value;
    let pattern = /^[0-9]*$/;
    if (initialValue.length <= 18) {
      if (initialValue.length <= 8) {
        if (pattern.test(initialValue)) {
          this.el.nativeElement.value = initialValue;
        } else {
          this.correctInput(initialValue);
        }
      } else if (initialValue.length == 9 && event.data == "T") {
        this.el.nativeElement.value = initialValue;
      } else if (initialValue.length > 9 && pattern.test(event.data)) {
        this.el.nativeElement.value = initialValue;
      } else {
        this.correctInput(initialValue);
      }
    } else {
      this.correctInput(initialValue);
    }
  }

  correctInput(initialValue) {
    this.el.nativeElement.value = initialValue.substring(
      0,
      initialValue.length - 1
    );
  }
}
