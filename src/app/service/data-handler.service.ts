import { Injectable } from '@angular/core';
import { Theme } from '../models/Theme';
import {TestData} from '../testdata/TestData';
import {Chapter} from '../models/Chapter';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  chaptersSubject = new BehaviorSubject<Chapter[]>(TestData.chapters);
  themeSubject = new BehaviorSubject<Theme[]>(TestData.themes);

  constructor() {

  }
  /*
  getThemes(): Theme[]{
    return TestData.themes;
    is nu themeSubject behaviourSubject geworden
  }

  fillChapters() {
    this.chaptersSubject.next(TestData.chapters);
  }
*/

  fillChaptersByTheme(theme: Theme){
    this.chaptersSubject.next(TestData.chapters.filter(element => element.theme === theme));
  }
}
