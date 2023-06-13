import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomCheckboxComponent } from './custom-checkbox/custom-checkbox.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, CustomCheckboxComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
