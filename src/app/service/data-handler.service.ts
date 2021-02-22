import { Injectable } from '@angular/core';
import { Subject } from '../models/Subject';
import {TestData} from '../testdata/TestData';
import {Chapter} from '../models/Chapter';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getSubjects(): Subject[]{
    return TestData.subjects;
  }

  getChapters(): Chapter[]{
    return TestData.chapters;
  }

  getChaptersBySubject(subject: Subject): Chapter[]{
    const chapters = TestData.chapters.filter(element => element.subject === subject);
    console.log(chapters);
    return chapters;
  }
}
