import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ThemeComponent} from './views/themes/themes.component';
import {ChapterComponent} from './views/chapters/chapters.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';
import { EditChapterComponent } from './dialog/edit-chapter/edit-chapter.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule, MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { DeleteChapterComponent } from './dialog/delete-chapter/delete-chapter.component';
import {MatDatepicker, MatDatepickerModule} from '@angular/material/datepicker';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    ChapterComponent,
    EditChapterComponent,
    DeleteChapterComponent,
  ],
  imports: [
    BrowserModule,
    MatSortModule,
    MatPaginatorModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  entryComponents:[
    EditChapterComponent,
    DeleteChapterComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
