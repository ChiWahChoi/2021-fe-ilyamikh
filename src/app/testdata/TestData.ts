import {Les} from '../models/Les';
import {Priority} from '../models/Priority';
import {Hoofdstuk} from '../models/Hoofdstuk';

export class TestData{

  static lessen: Les[] = [
    {id: 1, title: 'Onderzoekstechnieken'},
    {id: 2, title: 'Ontwerpen 3'},
    {id: 1, title: 'Web applicaties 4'},
    {id: 1, title: 'Projecten 2'},
    {id: 1, title: 'Databanken 2'},
    {id: 1, title: 'Onderzoekstechnieken'},
    {id: 1, title: 'Communication lab'}
  ];

  static prioriteiten: Priority[] = [
    {id: 1, title: 'Niet belangerijk', color: '#e5e5e5'},
    {id: 2, title: 'Beter een keer nazien', color: '#85D1B2'},
    {id: 3, title: 'Zeker een keer nazien en begrijpen', color: '#F1828D'},
    {id: 4, title: 'Zeer belangerijk zeker instuderen', color: '#F1128D'}
  ];

  static hoofdstukken: Hoofdstuk[] = [

    {
      id: 1,
      title: 'Aan de slag',
      isDoorgenomen: false,
      priority: TestData.prioriteiten[0],
      les: TestData.lessen[0],
      date: new Date('2020-09-01')
    },
    {
      id: 2,
      title: 'Het onderzoeksprocess',
      isDoorgenomen: false,
      priority: TestData.prioriteiten[1],
      les: TestData.lessen[0],
      date: new Date('2020-09-14')
    },
    {
      id: 3,
      title: 'Univaritaire analyse',
      isDoorgenomen: false,
      priority: TestData.prioriteiten[2],
      les: TestData.lessen[0],
      date: new Date('2020-10-01')
    },
    {
      id: 4,
      title: 'De centrale limietstelling',
      isDoorgenomen: false,
      priority: TestData.prioriteiten[3],
      les: TestData.lessen[0],
      date: new Date('2020-10-14')
    },
    {
      id: 5,
      title: 'Introduction',
      isDoorgenomen: true,
      priority: TestData.prioriteiten[0],
      les: TestData.lessen[1],
      date: new Date('2020-09-01')
    },
    {
      id: 6,
      title: 'Angular basics',
      isDoorgenomen: true,
      priority: TestData.prioriteiten[1],
      les: TestData.lessen[1],
      date: new Date('2020-09-14')
    },
    {
      id: 7,
      title: 'Angular sevices',
      isDoorgenomen: false,
      priority: TestData.prioriteiten[2],
      les: TestData.lessen[1],
      date: new Date('2020-10-01')
    },
    {
      id: 8,
      title: '.Net Core backend API',
      isDoorgenomen: false,
      priority: TestData.prioriteiten[3],
      les: TestData.lessen[1],
      date: new Date('2020-10-14')
    },
    {
      id: 9,
      title: 'Praktische info',
      isDoorgenomen: false,
      priority: TestData.prioriteiten[0],
      les: TestData.lessen[4],
      date: new Date('2020-09-01')
    },
    {
      id: 10,
      title: 'SQl Review',
      isDoorgenomen: true,
      priority: TestData.prioriteiten[0],
      les: TestData.lessen[4],
      date: new Date('2020-09-14')
    },
    {
      id: 11,
      title: 'SQL Advanced',
      isDoorgenomen: true,
      priority: TestData.prioriteiten[2],
      les: TestData.lessen[4],
      date: new Date('2020-10-01')
    }
  ];
}
