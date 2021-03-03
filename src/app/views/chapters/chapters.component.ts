import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Chapter} from 'src/app/models/Chapter';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChapterComponent implements OnInit {


  displayedColumns: string[] = ['color', 'chapterId', 'chapterName', 'subjectName', 'priorityName', 'date'];
  dataSource: MatTableDataSource<Chapter>; // контейнер - источник данных для таблицы

  chapters: Chapter[];

  constructor(private dataHandlerService: DataHandlerService ) {

  }

  ngOnInit(): void {
    this.dataHandlerService.chaptersSubject$.subscribe(chapters => this.chapters = chapters);
    // dataspurce is gebruikt voor table
    this.dataSource = new MatTableDataSource();
    this.refreshTable();
  }

  toggleChapterCompleted(chapter: Chapter) {
    chapter.isFinished = !chapter.isFinished;
  }

  private getPriorityColor(chapter: Chapter) : string{
    if (chapter.priority && chapter.priority.color) {
      return chapter.priority.color;
    }
    return '#ffffff';
  }


  // toont chapters met bijhorende opties
  private refreshTable() {
    this.dataSource.data = this.chapters; // обновить источник данных (т.к. данные массива tasks обновились)
  }

}
