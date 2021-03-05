import { Injectable } from '@angular/core';
import { Theme } from '../models/Theme';
import {Chapter} from '../models/Chapter';
import {BehaviorSubject, Observable, Subject, throwError} from 'rxjs';
import {Priority} from '../models/Priority';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {catchError, map, shareReplay, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor(private http: HttpClient) {
  }

  getChaptersByPriorityOrTheme$(priorityId?: number, themeId?: number) : Observable<Chapter[]>{
    return this.http.get(`${environment.apiUrl}/Chapters/`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Chapter[] => list.map(Chapter.fromJSON))
    );
  }

  getChaptersByTheme$(themeId?: number) : Observable<Chapter[]>{
    return this.http.get(`${environment.apiUrl}/Chapters?themeId=${themeId}`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Chapter[] => list.map(Chapter.fromJSON))
    );
  }



  getAllThemes$() : Observable<Theme[]>{

    return this.http.get(`${environment.apiUrl}/Themes/`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Theme[] => list.map(Theme.fromJSON))
    );
  }



  updateChapter$(chapter: Chapter) : Observable<Chapter> {

    console.log(chapter.toJSON());
    return this.http.put(`${environment.apiUrl}/Chapters/${chapter.id}`, chapter.toJSON())
      .pipe(catchError(this.handleError), map(Chapter.fromJSON))
      .pipe(catchError((err) => {
          return throwError(err);
        })
      );

  }


  getChapter$(chapterId: number) : Observable<Chapter>{
    return null;
  }





  deleteChapter$(chapterId: number) : void{

  }

  addChapter$(chapter: Chapter) : void{

  }

  /////////////////////////////////////////////////////




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


  //fillChaptersByTheme(theme: Theme){
  //  this.chaptersSubject$.next(TestData.chapters.filter(element => element.theme === theme));
  //}

  handleError(err: any): Observable<never> {
    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else if (err instanceof HttpErrorResponse) {
      console.log(err);
      errorMessage = `'${err.status} ${err.statusText}' when accessing '${err.url}'`;
    } else {
      errorMessage = err;
    }
    return throwError(errorMessage);
  }














  getAllPriorities$() : Observable<Priority[]>{
    return this.http.get(`${environment.apiUrl}/Priorities/`).pipe(
      tap(console.log),
      shareReplay(1),
      catchError(this.handleError),
      map((list: any[]): Priority[] => list.map(Priority.fromJSON))
    );
  }
}
