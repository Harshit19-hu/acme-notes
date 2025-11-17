// src/app/state/meta-reducers.ts

import { ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from './app.state';
import { isDevMode } from '@angular/core';

/** Simple logger meta-reducer (development only) */
export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  return (state, action) => {
    console.groupCollapsed(`%cAction: ${action.type}`, 'color:#4CAF50;font-weight:bold;');
    console.log('Prev State:', state);
    console.log('Action:', action);
    const next = reducer(state, action);
    console.log('Next State:', next);
    console.groupEnd();
    return next;
  };
}

export const metaReducers: MetaReducer<AppState>[] = isDevMode() ? [logger] : [];
