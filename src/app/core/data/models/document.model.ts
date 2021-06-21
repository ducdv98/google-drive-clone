import { UserModel } from './user.model';

export interface DocumentModel {
  id: number;
  name: string;
  mimeType?: string;
  thumbnail: string;
  file?: File | string;
  description: string;
  fileSizeInBytes?: number;
  createdBy: UserModel;
  createdDate: string;
  lastModifiedBy: UserModel;
  lastModifiedDate: string;
}
