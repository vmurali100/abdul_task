import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DemoMaterialModule } from "./material.module";
import { FormsModule } from "@angular/forms";
import { NumbersonlyDirective } from './numbersonly.directive';
import { CustomdateDirective } from './customdate.directive';
import { CustomdatesecDirective } from './customdatesec.directive';

@NgModule({
  declarations: [AppComponent, NumbersonlyDirective, CustomdateDirective, CustomdatesecDirective],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
