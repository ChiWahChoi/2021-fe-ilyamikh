import {Component, Input, OnInit, Output} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Theme} from '../../models/Theme';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-subjects',
  templateUrl: './themes.component.html',
  styleUrls: ['./themes.component.css']
})
export class ThemeComponent implements OnInit {

  @Input()
  themes: Theme[];

  @Output()
  selectTheme = new EventEmitter<Theme>();
  selectedTheme: Theme;

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {

  }

  getChaptersByTheme(theme: Theme): void {
    if(this.selectedTheme === theme){
      return;
    }
    this.selectedTheme = theme;

    this.selectTheme.emit(this.selectedTheme);
  }
}
