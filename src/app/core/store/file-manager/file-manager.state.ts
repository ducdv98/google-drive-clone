import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { DocumentModel, Error } from '../../data/models';
import { LOADING_STATE, LoadingState } from '../../data/enums';

export interface FileManagerState extends EntityState<DocumentModel> {
  loadingState: LoadingState;
  openDetailPanel: boolean;
}

export const adapter: EntityAdapter<DocumentModel> = createEntityAdapter<DocumentModel>({});

export const initialFileManagerState = adapter.getInitialState({
  loadingState: LOADING_STATE.INIT,
  openDetailPanel: false,
});

