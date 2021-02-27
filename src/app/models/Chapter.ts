import {Priority} from './Priority';
import {Theme} from './Theme';

export class Chapter {

  id: number;
  title: string;
  isFinished: boolean;
  priority?: Priority;
  theme?: Theme;
  date?: Date;

  constructor(id: number, title: string, isFinished: boolean, priority?: Priority, theme?: Theme, date?: Date) {
    this.id = id;
    this.title = title;
    this.isFinished = isFinished;
    this.priority = priority;
    this.theme = theme;
    this.date = date;
  }
}
