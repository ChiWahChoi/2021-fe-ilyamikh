import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DataHandlerService} from "../../service/data-handler.service";
import {Chapter} from 'src/app/models/Chapter';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';


@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChapterComponent implements OnInit {


  displayedColumns: string[] = ['color', 'chapterId', 'chapterName', 'subjectName', 'priorityName', 'date'];
  dataSource: MatTableDataSource<Chapter>; //source for table


  @ViewChild(MatPaginator, {static:false})
  private paginator: MatPaginator;

  @ViewChild(MatSort, {static:false})
  private sort: MatSort;


  chapters: Chapter[];

  @Input('chapters')
  private set setChapters(chapters: Chapter[]){
    this.chapters = chapters;
    this.fillTable();
  }

  @Output()
  updateChapter = new EventEmitter<Chapter>();



  constructor(private dataHandler: DataHandlerService ) {
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource();
    this.fillTable();
  }

  toggleChapterCompleted(chapter: Chapter) {
    chapter._isFinished = !chapter.isFinished;
  }

  private getPriorityColor(chapter: Chapter) : string{

    if(chapter.isFinished){
      return '#F8F8FA';
    }

    if (chapter.priority && chapter.priority.color) {
      return chapter.priority.color;
    }
    return '#ffffff';
  }


  // toont chapters met bijhorende opties
  private fillTable() {
    if(!this.dataSource){return;}

    this.dataSource.data = this.chapters;
    this.addTableObjects();

    this.dataSource.sortingDataAccessor = (chapter, colName) => {
      switch (colName) {
        case 'priorityName': {return chapter.priority ? chapter.priority.id : null}
        case 'subjectName': {return chapter.theme ? chapter.theme.id : null}
        case 'chapterName': {return chapter.title}
      }
    }
  }

  private addTableObjects(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }


  onChapterClick(element: Chapter) {
      this.updateChapter.emit(element);
  }
}
