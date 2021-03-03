import { Injectable } from '@angular/core';
import { Theme } from '../models/Theme';
import {TestData} from '../testdata/TestData';
import {Chapter} from '../models/Chapter';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import {Priority} from '../models/Priority';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  public chaptersSubject$ = new BehaviorSubject<Chapter[]>(TestData.chapters);
  public themeSubject$ = new BehaviorSubject<Theme[]>(TestData.themes);





  constructor() {

  }


  getChapter$(chapterId: number) : Observable<Chapter>{
    return null;
  }

  getChaptersByPriorityOrTheme$(priorityId?: number, themeId?: number) : Observable<Chapter[]>{
    return null;
  }

  updateChapter$(chapterId: number) : void {

  }

  deleteChapter$(chapterId: number) : void{

  }

  addChapter$(chapter: Chapter) : void{

  }

  /////////////////////////////////////////////////////


  getAllPriorities$() : Observable<Priority[]>{
    return null;
  }

  addPriority$(priority: Priority){

  }

  getPriority$() : Observable<Priority>{
    return null;
  }

  deletePriority$(priorityId: number){

  }

  updatePriority$(priorityId: number){

  }

  ////////////////////////////////////////////////////////


  getAllThemes$() : Observable<Theme[]>{
    return null;
  }

  addTheme$(theme: Theme){

  }

  getTheme$() : Observable<Theme>{
    return null;
  }

  deleteTheme$(themeId: number){

  }

  updateTheme$(themeId: number){

  }

  /////////////////////////////////////////////////////////////


  fillChaptersByTheme(theme: Theme){
    this.chaptersSubject$.next(TestData.chapters.filter(element => element.theme === theme));
  }
}
