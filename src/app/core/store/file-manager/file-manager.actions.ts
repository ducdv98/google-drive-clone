import { createAction, props } from '@ngrx/store';
import { DocumentModel, Error } from '@core/data/models';

const PREFIX_ACTION = '[File Manager]';

export const toggleDetailPanelAction = createAction(`${PREFIX_ACTION} Toggle detail panel`);
export const toggleShowAsGridAction = createAction(`${PREFIX_ACTION} Toggle show as grid`);

export const getDocumentsAction = createAction(`${PREFIX_ACTION} Get documents`);
export const getDocumentsSuccessAction =
  createAction(`${PREFIX_ACTION} Get documents success`, props<{ documents: Array<DocumentModel> }>());
export const getDocumentsErrorAction = createAction(`${PREFIX_ACTION} Get documents error`, props<{ error: Error }>());

export const selectDocumentAction = createAction(`${PREFIX_ACTION} Select document`, props<{ documentId: number }>());
