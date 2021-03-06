import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './file-manager.actions';
import { adapter, FileManagerState, initialFileManagerState } from './file-manager.state';
import { LOADING_STATE } from '@core/data/enums';

const fileManagerReducers = createReducer(
  initialFileManagerState,
  on(actions.toggleDetailPanelAction, state => ({ ...state, openDetailPanel: !state.openDetailPanel })),
  on(actions.toggleShowAsGridAction, state => ({ ...state, showAsGrid: !state.showAsGrid })),
  on(actions.getDocumentsAction, state => ({ ...state, loadingState: LOADING_STATE.LOADING })),
  on(actions.getDocumentsSuccessAction, (state, { documents }) => adapter.addMany(documents, {
    ...state,
    loadingState: LOADING_STATE.LOADED
  })),
  on(actions.getDocumentsErrorAction, (state, { error }) => ({ ...state, loadingState: LOADING_STATE.ERROR })),
  on(actions.selectDocumentAction, (state, { documentId }) => ({ ...state, selectedDocumentId: documentId })),
);

export const fileManagerReducer = (state: FileManagerState | undefined, action: Action) => fileManagerReducers(state, action);
