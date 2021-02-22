import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LessenComponent } from './views/lessen/lessen.component';
import { HoofdstukkenComponent } from './views/hoofdstukken/hoofdstukken.component';

@NgModule({
  declarations: [
    AppComponent,
    LessenComponent,
    HoofdstukkenComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
