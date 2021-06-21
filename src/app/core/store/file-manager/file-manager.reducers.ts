import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './file-manager.actions';
import { adapter, FileManagerState, initialFileManagerState } from './file-manager.state';
import { LOADING_STATE } from '@core/data/enums';

const fileManagerReducers = createReducer(
  initialFileManagerState,
  on(actions.toggleDetailPanel, state => ({ ...state, openDetailPanel: !state.openDetailPanel })),
  on(actions.getDocuments, state => ({ ...state, loadingState: LOADING_STATE.LOADING })),
  on(actions.getDocumentsSuccess, (state, { documents }) => adapter.addMany(documents, { ...state, loadingState: LOADING_STATE.LOADED })),
  on(actions.getDocumentsError, (state, { error }) => ({ ...state, loadingState: LOADING_STATE.ERROR })),
);

export const fileManagerReducer = (state: FileManagerState | undefined, action: Action) => fileManagerReducers(state, action);
