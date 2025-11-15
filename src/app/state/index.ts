// src/app/state/index.ts

import { ActionReducerMap } from '@ngrx/store';
import { AppState } from './app.state';

/**
 * Root reducers map.
 * Empty initially — features register their reducers.
 */
export const reducers: ActionReducerMap<AppState> = {
  // textNotes: textNotesReducer,
  // articleNotes: articleNotesReducer,
};

export * from './app.state';
export * from './meta-reducers';
