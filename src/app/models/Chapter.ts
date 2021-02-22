import {Priority} from './Priority';
import {Subject} from './Subject';

export class Chapter {

  id: number;
  title: string;
  isFinished: boolean;
  priority?: Priority;
  subject?: Subject;
  date?: Date;

  constructor(id: number, title: string, isFinished: boolean, priority?: Priority, subject?: Subject, date?: Date) {
    this.id = id;
    this.title = title;
    this.isFinished = isFinished;
    this.priority = priority;
    this.subject = subject;
    this.date = date;
  }
}
