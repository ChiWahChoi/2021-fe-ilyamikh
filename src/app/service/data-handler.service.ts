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

  constructor() { }

  getThemes(): Theme[]{
    return TestData.themes;
  }

  getChapters(): Chapter[]{
    return TestData.chapters;
  }

  getChaptersByTheme(theme: Theme): Chapter[]{
    const chapters = TestData.chapters.filter(element => element.theme === theme);
    console.log(chapters);
    return chapters;
  }
}
