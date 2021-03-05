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

  private selectedTheme: Theme = null;

  constructor(private dataHandlerService: DataHandlerService) {

  }

  ngOnInit(): void {
    this.dataHandlerService.getAllThemes$().subscribe(themes => this.themes = themes);
    this.dataHandlerService.getChaptersByPriorityOrTheme$().subscribe(chapters => this.chapters = chapters);

    this.onSelectTheme(null);
  }


  onSelectTheme(theme: Theme) {
    this.selectedTheme = theme;

    this.dataHandlerService.getChaptersByTheme$(theme.id).subscribe(chapters => this.chapters = chapters);
  }

  onUpdateChapter(chapter: Chapter) {
      console.log(chapter);
  }
}
