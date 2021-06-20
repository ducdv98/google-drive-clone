import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { StoreRootState } from './router';
import { fileManagerReducer, FileManagerState } from '@core/store/file-manager';

export interface AppState {
  router: StoreRootState;
  fileManager: FileManagerState;
}

export const reducers: ActionReducerMap<AppState> = {
  router: routerReducer,
  fileManager: fileManagerReducer,
};
