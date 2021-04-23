import {Component, OnInit} from '@angular/core';
import {Theme} from './models/Theme';
import {DataHandlerService} from './service/data-handler.service';
import {Chapter} from './models/Chapter';
import {Observable, zip} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'projectWA4';
  themes: Theme[];
  chapters: Chapter[];
  selectedTheme: Theme = null;

  totalChapters: number
  totalCompletedChapters: number
  totalUncompletedChapters: number

  constructor(private dataHandlerService: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandlerService.getChaptersByPriorityOrTheme$().subscribe(chapters => this.chapters = chapters);
    this.dataHandlerService.getAllThemes$().subscribe(themes => this.themes = themes);
    this.onSelectTheme(null);

  }

  onSelectTheme(theme: Theme) {
    if (theme == null) {
      this.dataHandlerService.getChaptersByPriorityOrTheme$().subscribe(chapters => this.chapters = chapters);
    } else {
      this.selectedTheme = theme;
    }
  }

  onUpdateChapter(chapter: Chapter) {

    this.dataHandlerService.updateChapter$(chapter).subscribe(() => {
      this.dataHandlerService.getChaptersByPriorityOrTheme$().subscribe(chapters => this.chapters = chapters);
    });
  }

  onDeleteChapter(chapter: Chapter) {
    this.dataHandlerService.deleteChapter$(chapter).subscribe(() => {
      this.dataHandlerService.getChaptersByPriorityOrTheme$().subscribe(chapters => this.chapters = chapters);
    });
    window.location.reload();
  }

  onDeletetheme(theme: Theme) {
    this.dataHandlerService.deleteTheme$(theme.id).subscribe(e => {
      this.dataHandlerService.getAllThemes$().subscribe( themes => this.themes = themes);
    });

  }

  onUpdateTheme(theme: Theme) {
    this.dataHandlerService.updateTheme$(theme).subscribe(() => {
      this.selectedTheme = null;
      this.onSelectTheme(this.selectedTheme);
    });
    window.location.reload();
  }

  onAddChapter(chapter: Chapter) {
    this.dataHandlerService.addChapter$(chapter).subscribe(result => {
      this.dataHandlerService.getChaptersByPriorityOrTheme$().subscribe(chapters => this.chapters = chapters);
    });
  }

  onAddTheme(titel: string) {
    this.dataHandlerService.addTheme$(new Theme(null, titel)).subscribe( result => {
      this.dataHandlerService.getAllThemes$().subscribe( themes => this.themes = themes);
    });
  }

  updateTasksAndStats(){
      this.totalCompletedChapters = this.chapters.filter(e => e._isFinished).length;
      this.totalUncompletedChapters = this.chapters.filter(e => !e._isFinished).length;
      this.totalChapters = this.chapters.length;
  }


}
