import { UserModel } from './user.model';
import { IconType } from '@core/data/enums';

export enum DocumentType {
  FILE = 'FILE',
  FOLDER = 'FOLDER',
}

export interface DocumentModel {
  id: number;
  name: string;
  thumbnail: string;
  description: string;
  createdBy: UserModel;
  createdDate: string;
  lastModifiedBy: UserModel;
  lastModifiedDate: string;
  iconType: IconType;
  type: DocumentType;
}

export interface ParentContainer {
  id: number;
  name: string;
}

export interface DocumentDetail {
  documentId: number;
  type: string;
  parent: ParentContainer;
  fileSizeInBytes: number;
  owner: UserModel;
  lastModifiedBy: UserModel;
  lastModifiedDate: string;
  createdDate: string;
  description?: string;
}
