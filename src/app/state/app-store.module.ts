// src/app/state/app-store.module.ts

import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { reducers } from './index';
import { metaReducers } from './meta-reducers';

@NgModule({
  imports: [
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictActionTypeUniqueness: true,
      },
    }),

    EffectsModule.forRoot([]),

    // Devtools must be included statically using environment
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: false
    }),
  ],
})
export class AppStoreModule {}
