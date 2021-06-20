import { Action, createReducer, on } from '@ngrx/store';
import * as actions from './file-manager.actions';
import { FileManagerState, initialFileManagerState } from './file-manager.state';

const fileManagerReducers = createReducer(
  initialFileManagerState,
  on(actions.toggleDetailPanel, state => ({ ...state, openDetailPanel: !state.openDetailPanel }))
);

export const fileManagerReducer = (state: FileManagerState | undefined, action: Action) => fileManagerReducers(state, action);
