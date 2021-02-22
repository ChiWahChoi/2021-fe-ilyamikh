import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubjectComponent } from './views/subjects/subjects.component';
import { ChapterComponent } from './views/chapters/chapters.component';

@NgModule({
  declarations: [
    AppComponent,
    SubjectComponent,
    ChapterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
