import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appNumbersonly]"
})
export class NumbersonlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener("input", ["$event"]) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;
    let pattern = /^[-+]?\d+(\.\d+)?$/;
    if (event.data !== "." && event.data !== "-") {
      if (pattern.test(initalValue)) {
        this.el.nativeElement.value = initalValue;
      } else {
        this.el.nativeElement.value = initalValue.substr(
          0,
          initalValue.length - 1
        );
        // str = str.substr(0, str.length - 1);
      }
    }

    // if (val != "-" && val !== "." && val) {
    //   this.el.nativeElement.value = initalValue.replace(/[^0-9]*/g, "");
    // } else {
    //   this.el.nativeElement.value = initalValue;
    // }
  }
}
