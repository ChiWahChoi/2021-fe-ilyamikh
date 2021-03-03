import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ThemeComponent} from './views/themes/themes.component';
import {ChapterComponent} from './views/chapters/chapters.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    ChapterComponent,
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
