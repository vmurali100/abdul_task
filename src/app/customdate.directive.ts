import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appCustomdate]",
})
export class CustomdateDirective {
  constructor(private el: ElementRef) {}

  @HostListener("input", ["$event"]) onInputChange(event) {
    let initialValue = this.el.nativeElement.value;
    console.log(this.el.nativeElement.value);
    let pattern = /^[0-9]*$/;
    if (initialValue.length <= 14) {
      if (pattern.test(initialValue)) {
        this.el.nativeElement.value = initialValue;
      } else {
        if (event.data == "T") {
          if (initialValue.length == 9) {
            this.el.nativeElement.value = initialValue;
          } else if (initialValue.length < 9 || initialValue.length > 9) {
            this.el.nativeElement.value = initialValue.substring(
              0,
              initialValue.length - 1
            );
          }
        } else {
          console.log(initialValue);
        }
      }
    } else {
      this.el.nativeElement.value = initialValue.substring(
        0,
        initialValue.length - 1
      );
    }
  }
}
