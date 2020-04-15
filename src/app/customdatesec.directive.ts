import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appCustomdatesec]",
})
export class CustomdatesecDirective {
  constructor(private el: ElementRef) {}

  @HostListener("input", ["$event"]) onInputChange(event) {
    let initialValue = this.el.nativeElement.value;
    let pattern = /^[0-9]*$/;
    let spattern = this.el.nativeElement.getAttribute("spattern");
    let characters = this.el.nativeElement.getAttribute("ncar");
    if (initialValue.length <= Number(characters)) {
      if (initialValue.length <= 4 && pattern.test(event.data)) {
        this.el.nativeElement.value = initialValue;
      } else if (
        (initialValue.length == 5 || initialValue.length == 8) &&
        event.data == "-"
      ) {
        this.el.nativeElement.value = initialValue;
      } else if (
        initialValue.length > 5 &&
        initialValue.length < 8 &&
        pattern.test(event.data)
      ) {
        this.el.nativeElement.value = initialValue;
      } else if (
        initialValue.length > 8 &&
        initialValue.length < 11 &&
        pattern.test(event.data)
      ) {
        this.el.nativeElement.value = initialValue;
      } else if (initialValue.length == 11 && event.data == "T") {
        this.el.nativeElement.value = initialValue;
      } else if (
        initialValue.length > 11 &&
        initialValue.length < 14 &&
        pattern.test(event.data)
      ) {
        this.el.nativeElement.value = initialValue;
      } else if (
        (initialValue.length == 14 ||
          initialValue.length == 17 ||
          initialValue.length == 20) &&
        (event.data == ":" || event.data == ".")
      ) {
        this.el.nativeElement.value = initialValue;
      } else if (
        initialValue.length > 14 &&
        initialValue.length < 17 &&
        pattern.test(event.data)
      ) {
        this.el.nativeElement.value = initialValue;
      } else if (
        initialValue.length > 17 &&
        initialValue.length < 20 &&
        pattern.test(event.data)
      ) {
        this.el.nativeElement.value = initialValue;
      } else if (
        initialValue.length > 20 &&
        spattern == "3rd" &&
        pattern.test(event.data)
      ) {
        this.el.nativeElement.value = initialValue;
      } else if (initialValue.length > 20 && spattern == "4th") {
        if (
          initialValue.length > 20 &&
          initialValue.length < 24 &&
          pattern.test(event.data)
        ) {
          this.el.nativeElement.value = initialValue;
        } else if (initialValue.length == 24 && event.data == "+") {
          this.el.nativeElement.value = initialValue;
        } else if (initialValue.length > 24 && pattern.test(event.data)) {
          this.el.nativeElement.value = initialValue;
        } else {
          this.correctInput(initialValue);
        }
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
