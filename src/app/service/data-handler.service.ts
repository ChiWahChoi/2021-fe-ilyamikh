import { Injectable } from '@angular/core';
import { Les } from '../models/Les';
import {TestData} from '../testdata/TestData';
import {Hoofdstuk} from '../models/Hoofdstuk';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() { }

  getLessen(): Les[]{
    return TestData.lessen;
  }

  getHoofdstukken(): Hoofdstuk[]{
    return TestData.hoofdstukken;
  }
}
