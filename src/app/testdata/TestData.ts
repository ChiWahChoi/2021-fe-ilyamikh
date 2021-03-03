import {Theme} from '../models/Theme';
import {Priority} from '../models/Priority';
import {Chapter} from '../models/Chapter';

export class TestData{

  static themes: Theme[] = [
    {id: 1, title: 'Onderzoekstechnieken'},
    {id: 2, title: 'Ontwerpen 3'},
    {id: 3, title: 'Web applicaties 4'},
    {id: 4, title: 'Projecten 2'},
    {id: 5, title: 'Databanken 2'},
    {id: 6, title: 'IT2Talent'},
    {id: 7, title: 'Communication lab'}
  ];

  static priorities: Priority[] = [
    {id: 1, title: 'Niet belangerijk', color: '#e5e5e5'},
    {id: 2, title: 'Beter een keer nazien', color: '#85D1B2'},
    {id: 3, title: 'Zeker een keer nazien en begrijpen', color: '#85D1B2'},
    {id: 4, title: 'Zeer belangerijk zeker instuderen', color: '#F1128D'}
  ];

  static chapters: Chapter[] = [

    {
      id: 1,
      title: 'Aan de slag',
      isFinished: false,
      priority: TestData.priorities[0],
      theme: TestData.themes[0],
      date: new Date('2020-09-01')
    },
    {
      id: 2,
      title: 'Het onderzoeksprocess',
      isFinished: false,
      priority: TestData.priorities[1],
      theme: TestData.themes[0],
      date: new Date('2020-09-14')
    },
    {
      id: 3,
      title: 'Univaritaire analyse',
      isFinished: false,
      priority: TestData.priorities[2],
      theme: TestData.themes[0],
      date: new Date('2020-10-01')
    },
    {
      id: 4,
      title: 'De centrale limietstelling',
      isFinished: false,
      priority: TestData.priorities[3],
      theme: TestData.themes[0]
    },
    {
      id: 5,
      title: 'Introduction',
      isFinished: true,
      priority: TestData.priorities[0],
      theme: TestData.themes[2],
      date: new Date('2020-09-01')
    },
    {
      id: 6,
      title: 'Angular basics',
      isFinished: true,
      priority: TestData.priorities[1],
      theme: TestData.themes[2],
      date: new Date('2020-09-14')
    },
    {
      id: 7,
      title: 'Angular sevices',
      isFinished: false,
      priority: TestData.priorities[2],
      theme: TestData.themes[2]
    },
    {
      id: 8,
      title: '.Net Core backend API',
      isFinished: false,
      priority: TestData.priorities[3],
      theme: TestData.themes[2],
      date: new Date('2020-10-14')
    },
    {
      id: 9,
      title: 'Praktische info',
      isFinished: false,
      priority: TestData.priorities[0],
      theme: TestData.themes[4]
    },
    {
      id: 10,
      title: 'SQl Review',
      isFinished: true,
      priority: TestData.priorities[0],
      theme: TestData.themes[4],
      date: new Date('2020-09-14')
    },
    {
      id: 11,
      title: 'SQL Advanced',
      isFinished: true,
      priority: TestData.priorities[2],
      theme: TestData.themes[4],
      date: new Date('2020-10-01')
    },
    {
      id: 12,
      title: 'SQL Advanced2222',
      isFinished: true,
      priority: TestData.priorities[2],
      theme: TestData.themes[4]
    },
    {
      id: 13,
      title: 'SQL Advance33333',
      isFinished: true,
      theme: TestData.themes[4],
      date: new Date('2020-10-01')
    },
    {
      id: 13,
      title: 'SQL Advance33333',
      isFinished: true,
      priority: TestData.priorities[3],
      date: new Date('2020-10-01')
    },
    {
      id: 13,
      title: 'SQL Advance33333',
      isFinished: true,
      date: new Date('2020-10-01')
    }

  ];
}
