import {Component, OnInit} from '@angular/core';
import {Theme} from './models/Theme';
import {DataHandlerService} from './service/data-handler.service';
import {Chapter} from './models/Chapter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'projectWA4';
  themes: Theme[];
  chapters: Chapter[];
  selectedTheme: Theme = null;

  constructor(private dataHandlerService: DataHandlerService) {

  }

  ngOnInit(): void {
    this.dataHandlerService.getAllThemes$().subscribe(themes => this.themes = themes);
    this.dataHandlerService.getChaptersByPriorityOrTheme$().subscribe(chapters => this.chapters = chapters);

    this.onSelectTheme(null);
  }


  onSelectTheme(theme: Theme) {
    if (theme == null) {
      this.dataHandlerService.getChaptersByPriorityOrTheme$().subscribe(chapters => this.chapters = chapters);
    } else {
      this.selectedTheme = theme;
      this.dataHandlerService.getChaptersByTheme$(theme.id).subscribe(chapters => this.chapters = chapters);
    }
  }

  onUpdateChapter(chapter: Chapter) {
    this.dataHandlerService.updateChapter$(chapter).subscribe(() => {
        this.dataHandlerService.getChaptersByTheme$(this.selectedTheme.id).subscribe(chaps => this.chapters = chaps);
    });
  }

  onDeleteChapter(chapter: Chapter) {
    this.dataHandlerService.deleteChapter$(chapter).subscribe(() => {
      this.dataHandlerService.getChaptersByTheme$(this.selectedTheme.id).subscribe(chaps => this.chapters = chaps);
    });
  }

  onDeletetheme(theme: Theme) {
    this.dataHandlerService.deleteTheme$(theme.id).subscribe(e => {
      this.selectedTheme = null;
      this.onSelectTheme(this.selectedTheme);
    })
  }

  onUpdateTheme(theme: Theme) {
    this.dataHandlerService.updateTheme$(theme).subscribe(e => {
      this.onSelectTheme(this.selectedTheme);
    })
  }
}
