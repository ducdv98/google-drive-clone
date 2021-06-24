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
  fileSizeInBytes?: number;
  createdBy: UserModel;
  createdDate: string;
  lastModifiedBy: UserModel;
  lastModifiedDate: string;
  iconType: IconType;
  type: DocumentType;
}
