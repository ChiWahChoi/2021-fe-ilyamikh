import { Component, OnInit } from '@angular/core';
import {Chapter} from '../../models/Chapter';
import {DataHandlerService} from '../../service/data-handler.service';

@Component({
  selector: 'app-chapters',
  templateUrl: './chapters.component.html',
  styleUrls: ['./chapters.component.css']
})
export class ChapterComponent implements OnInit {

  chapters: Chapter[];

  constructor(private dataHandlerService: DataHandlerService ) {

  }

  ngOnInit(): void {
    this.dataHandlerService.chaptersSubject.subscribe(chapters => this.chapters = chapters);
  }

}
