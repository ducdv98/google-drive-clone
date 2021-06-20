import { createAction } from '@ngrx/store';

const PREFIX_ACTION = '[File Manager]';

export const toggleDetailPanel = createAction(`${PREFIX_ACTION} Toggle detail panel`);
