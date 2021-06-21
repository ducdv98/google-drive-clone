import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, FileManagerState } from './file-manager.state';

const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

export const _selectDocumentIds = selectIds;
export const _selectDocumentEntities = selectEntities;
export const _selectAllDocuments = selectAll;
export const _selectDocumentTotal = selectTotal;

export const selectFileManagerState = createFeatureSelector<FileManagerState>('fileManager');
export const selectFileManagerLoadingState = createSelector(selectFileManagerState, (state) => state.loadingState);
export const selectFileManagerOpenDetailPanel = createSelector(selectFileManagerState, (state) => state.openDetailPanel);

export const selectDocumentIds = createSelector(selectFileManagerState, _selectDocumentIds);
export const selectDocumentEntities = createSelector(selectFileManagerState, _selectDocumentEntities);
export const selectAllDocuments = createSelector(selectFileManagerState, _selectAllDocuments);
export const selectDocumentTotal = createSelector(selectFileManagerState, _selectDocumentTotal);
