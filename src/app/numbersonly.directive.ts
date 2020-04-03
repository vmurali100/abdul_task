import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appNumbersonly]"
})
export class NumbersonlyDirective {
  constructor(private el: ElementRef) {}

  @HostListener("input", ["$event"]) onInputChange(event) {
    const initalValue = this.el.nativeElement.value;
    let pattern = /^[-+]?\d+(\.\d+)?$/;
    if (event.data !== null) {
      if (event.data !== "." && event.data !== "-") {
        if (pattern.test(initalValue)) {
          // Add your Range Condion Here
          // if(range Condition){
          //   this.el.nativeElement.value = initalValue;
          // }else{
          //   this.el.nativeElement.value = initalValue.substr(
          //     0,
          //     initalValue.length - 1
          //   );
          // }
          this.el.nativeElement.value = initalValue;
        } else {
          this.el.nativeElement.value = initalValue.substr(
            0,
            initalValue.length - 1
          );
        }
      } else if (initalValue.lastIndexOf("-") > 0) {
        this.el.nativeElement.value = initalValue.substr(
          0,
          initalValue.length - 1
        );
      }
    }
  }
}
