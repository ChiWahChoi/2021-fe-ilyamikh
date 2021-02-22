import { Component, OnInit } from '@angular/core';
import {Hoofdstuk} from '../../models/Hoofdstuk';
import {DataHandlerService} from '../../service/data-handler.service';

@Component({
  selector: 'app-hoofdstukken',
  templateUrl: './hoofdstukken.component.html',
  styleUrls: ['./hoofdstukken.component.css']
})
export class HoofdstukkenComponent implements OnInit {

  hoofdstukken: Hoofdstuk[];

  constructor(private dataHandlerService: DataHandlerService ) { }

  ngOnInit(): void {
    this.hoofdstukken = this.dataHandlerService.getHoofdstukken();
  }

}
