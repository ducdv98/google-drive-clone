import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, FileManagerState } from './file-manager.state';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const selectDocumentIds = selectIds;
export const selectDocumentEntities = selectEntities;
export const selectAlDocuments = selectAll;
export const selectDocumentTotal = selectTotal;

export const selectFileManagerState = createFeatureSelector<FileManagerState>('fileManager');
export const selectFileManagerLoadingState = createSelector(selectFileManagerState, (state) => state.loadingState);
export const selectFileManagerOpenDetailPanel = createSelector(selectFileManagerState, (state) => state.openDetailPanel);
