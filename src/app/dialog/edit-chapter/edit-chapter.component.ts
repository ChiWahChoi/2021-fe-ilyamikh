import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DataHandlerService} from '../../service/data-handler.service';
import {Chapter} from '../../models/Chapter';
import {Theme} from '../../models/Theme';
import {Priority} from '../../models/Priority';
import {DeleteChapterComponent} from '../delete-chapter/delete-chapter.component';

@Component({
  selector: 'app-edit-chapter',
  templateUrl: './edit-chapter.component.html',
  styleUrls: ['./edit-chapter.component.css']
})
export class EditChapterComponent implements OnInit {

  constructor(
    private dialogRef: MatDialogRef<EditChapterComponent>,
    @Inject(MAT_DIALOG_DATA) private data: [Chapter, string],
    private dataHandler :DataHandlerService,
    private dialog: MatDialog
  ) { }

  dialogTitle: string;
  chapter: Chapter;
  themes: Theme[];
  priorities: Priority[];
  tmpTitle: string;
  tmpTheme: Theme;
  tmpPriority: Priority;

  ngOnInit(): void {
    this.dataHandler.getAllThemes$().subscribe(themes => this.themes = themes);
    this.dataHandler.getAllPriorities$().subscribe(prios => this.priorities = prios);

    this.chapter = this.data[0];
    this.dialogTitle = this.data[1];

    console.log(this.chapter)
    this.tmpTitle = this.chapter._title;
    this.tmpTheme = this.chapter._theme;
    this.tmpPriority = this.chapter._priority;

  }

  onConfirm() {
    this.chapter._title = this.tmpTitle;
    this.chapter._theme = this.tmpTheme;
    this.chapter._priority = this.tmpPriority;

    this.dialogRef.close(this.chapter);
  }

  onCancel() {
    this.dialogRef.close(null);
  }

  delete() {
    const dialogRef = this.dialog.open(DeleteChapterComponent, {
      maxWidth: '500px',
      data: {
        dialogTitle: 'Confirm delete',
        message: `Chapter: "${this.chapter.title}"?`
      },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.dialogRef.close('delete'); // нажали удалить
      }
    });
  }

  complete() {
    this.dialogRef.close('complete')
  }

  activate() {
    this.dialogRef.close('activate')
  }
}
