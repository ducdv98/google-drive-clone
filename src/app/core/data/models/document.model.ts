import { UserModel } from './user.model';

export enum DocumentType {
  FILE = 'FILE',
  FOLDER = 'FOLDER',
}

export interface DocumentModel {
  id: number;
  name: string;
  mimeType?: string;
  thumbnail: string;
  description: string;
  fileSizeInBytes?: number;
  createdBy: UserModel;
  createdDate: string;
  lastModifiedBy: UserModel;
  lastModifiedDate: string;
  iconType: string;
  type: DocumentType;
}
