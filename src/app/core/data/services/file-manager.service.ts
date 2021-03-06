import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DocumentModel, DocumentType, UserModel } from '@core/data/models';
import { IconType } from '@core/data/enums';

const users: Array<UserModel> = [
  {
    id: 171287,
    name: 'John David'
  },
  {
    id: 128354,
    name: 'Mc Loren'
  },
  {
    id: 632387,
    name: 'C Ronaldo'
  },
  {
    id: 584554,
    name: 'L Messi'
  },
  {
    id: 150727,
    name: 'P Pogba'
  }
];


@Injectable({
  providedIn: 'root'
})
export class FileManagerService {
  getDocuments(): Observable<Array<DocumentModel>> {
    const documents: Array<DocumentModel> = [
      {
        id: 730307,
        name: 'Nulla lobortis',
        thumbnail: '',
        createdDate: '1970-01-01T00:00:01.986Z',
        description: 'Lorem a felis sollicitudin, id laoreet mauris tincidunt',
        lastModifiedDate: '1970-01-01T00:00:01.985Z',
        createdBy: users[0],
        lastModifiedBy: users[0],
        iconType: IconType.folder,
        type: DocumentType.FOLDER,
      },
      {
        id: 964607,
        name: 'DEA documents',
        thumbnail: '',
        createdDate: '1970-01-01T00:00:01.998Z',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        lastModifiedDate: '1970-01-01T00:00:01.987Z',
        createdBy: users[0],
        lastModifiedBy: users[0],
        iconType: IconType.doc,
        type: DocumentType.FILE,
      },
      {
        id: 110030,
        name: 'malesuada ',
        thumbnail: '',
        createdDate: '1970-01-01T00:00:02.004Z',
        description: 'Lorem a felis sollicitudin, id laoreet mauris tincidunt',
        lastModifiedDate: '1970-01-01T00:00:02.004Z',
        createdBy: users[0],
        lastModifiedBy: users[0],
        iconType: IconType.docx,
        type: DocumentType.FILE,
      },
      {
        id: 954551,
        name: 'Sed volutpat mi vel mauris',
        thumbnail: '',
        createdDate: '1970-01-01T00:00:02.004Z',
        description: 'Lorem a felis sollicitudin, id laoreet mauris tincidunt',
        lastModifiedDate: '1970-01-01T00:00:02.004Z',
        createdBy: users[0],
        lastModifiedBy: users[0],
        iconType: IconType.pdf,
        type: DocumentType.FILE,
      },
      {
        id: 689645,
        name: 'Sed volutpat mi vel mauris',
        thumbnail: '',
        createdDate: '1970-01-01T00:00:02.004Z',
        description: 'Lorem a felis sollicitudin, id laoreet mauris tincidunt',
        lastModifiedDate: '1970-01-01T00:00:02.004Z',
        createdBy: users[0],
        lastModifiedBy: users[0],
        iconType: IconType.pdf,
        type: DocumentType.FILE,
      },
      {
        id: 453457,
        name: 'Sed volutpat mi vel mauris',
        thumbnail: '',
        createdDate: '1970-01-01T00:00:02.004Z',
        description: 'Lorem a felis sollicitudin, id laoreet mauris tincidunt',
        lastModifiedDate: '1970-01-01T00:00:02.004Z',
        createdBy: users[0],
        lastModifiedBy: users[0],
        iconType: IconType.pdf,
        type: DocumentType.FILE,
      },
      {
        id: 453455,
        name: 'Sed volutpat mi vel mauris',
        thumbnail: '',
        createdDate: '1970-01-01T00:00:02.004Z',
        description: 'Lorem a felis sollicitudin, id laoreet mauris tincidunt',
        lastModifiedDate: '1970-01-01T00:00:02.004Z',
        createdBy: users[0],
        lastModifiedBy: users[0],
        iconType: IconType.pdf,
        type: DocumentType.FILE,
      }
    ];
    return of(documents);
  }
}
