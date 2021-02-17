import {Priority} from './Priority';
import {Les} from './Les';

export class Hoofdstuk {

  id: number;
  title: string;
  isDoorgenomen: boolean;
  priority?: Priority;
  les?: Les;
  date?: Date;

  constructor(id: number, title: string, isDoorgenomen: boolean, priority?: Priority, les?: Les, date?: Date) {
    this.id = id;
    this.title = title;
    this.isDoorgenomen = isDoorgenomen;
    this.priority = priority;
    this.les = les;
    this.date = date;
  }
}
