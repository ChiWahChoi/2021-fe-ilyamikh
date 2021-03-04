import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Theme} from '../../models/Theme';

@Component({
  selector: 'app-subjects',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemeComponent implements OnInit {

  themes: Theme[];

  selectedTheme: Theme;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.getAllThemes$().subscribe(themes => this.themes = themes);
  }

  getChaptersByTheme(theme: Theme): void {
    this.selectedTheme = theme;
  }
}
