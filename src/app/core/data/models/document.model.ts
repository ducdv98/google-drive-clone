export interface DocumentModel {
  id: number;
  name: string;
  mimeType?: string;
  thumbnail: string;
  file?: File | string;
  description: string;
  fileSizeInBytes: number;
  lastOpened: string;
  // createdBy: User;
  createdDate: string;
  // lastModifiedBy: User;
  lastModifiedDate: string;
}
