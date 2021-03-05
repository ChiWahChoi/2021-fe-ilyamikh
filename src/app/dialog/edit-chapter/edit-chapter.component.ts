import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {DataHandlerService} from '../../service/data-handler.service';
import {Chapter} from '../../models/Chapter';

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

  tmpTitle: string;

  ngOnInit(): void {
    this.chapter = this.data[0];
    this.dialogTitle = this.data[1];

    console.log(this.chapter)
    this.tmpTitle = this.chapter._title;
  }

  onConfirm() {
    this.chapter._title = this.tmpTitle;
    this.dialogRef.close(this.chapter);
  }

  onCancel() {
    this.dialogRef.close(null);
  }
}
