import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as actions from './file-manager.actions';
import { FileManagerService } from '@core/data/services';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class FileManagerEffects {
  getDocuments$ = createEffect(() => this.actions$.pipe(
    ofType(actions.getDocumentsAction),
    mergeMap(() => this.fileManagerService.getDocuments()
      .pipe(
        map(documents => actions.getDocumentsSuccessAction({ documents })),
        catchError((error) => of(actions.getDocumentsErrorAction({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private fileManagerService: FileManagerService
  ) {
  }
}
