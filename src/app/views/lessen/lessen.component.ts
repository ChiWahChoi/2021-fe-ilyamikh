import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../service/data-handler.service';
import {Les} from '../../models/Les';

@Component({
  selector: 'app-lessen',
  templateUrl: './lessen.component.html',
  styleUrls: ['./lessen.component.css']
})
export class LessenComponent implements OnInit {

  lessen: Les[];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.lessen = this.dataHandler.getLessen();
    console.log(this.lessen);
  }

}
