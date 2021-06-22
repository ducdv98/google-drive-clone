import { createAction, props } from '@ngrx/store';
import { DocumentModel, Error } from '@core/data/models';

const PREFIX_ACTION = '[File Manager]';

export const toggleDetailPanel = createAction(`${PREFIX_ACTION} Toggle detail panel`);
export const toggleShowAsGrid = createAction(`${PREFIX_ACTION} Toggle show as grid`);

export const getDocuments = createAction(`${PREFIX_ACTION} Get documents`);
export const getDocumentsSuccess =
  createAction(`${PREFIX_ACTION} Get documents success`, props<{ documents: Array<DocumentModel> }>());
export const getDocumentsError = createAction(`${PREFIX_ACTION} Get documents error`, props<{ error: Error }>());
