import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Subject} from '../../models/Subject';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.css']
})
export class SubjectComponent implements OnInit {

  subjects: Subject[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.subjects = this.dataHandler.getSubjects();
  }

  showChaptersBySubject(subj: Subject): void {
    this.dataHandler.getChaptersBySubject(subj);
  }
}
