import * as fromRouter from '@ngrx/router-store';
import { RouterStateUrl } from './custom-serializer';

export interface StoreRootState {
  router: fromRouter.RouterReducerState<RouterStateUrl>;
}
