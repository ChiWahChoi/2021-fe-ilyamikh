import { Injectable } from '@angular/core';
import { Theme } from '../models/Theme';
import {TestData} from '../testdata/TestData';
import {Chapter} from '../models/Chapter';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  chaptersSubject = new Subject<Chapter[]>();

  constructor() {

  }

  getThemes(): Theme[]{
    return TestData.themes;
  }

  fillChapters() {
    this.chaptersSubject.next(TestData.chapters);
  }

  fillChaptersByTheme(theme: Theme){
    this.chaptersSubject.next(TestData.chapters.filter(element => element.theme === theme));
  }
}
