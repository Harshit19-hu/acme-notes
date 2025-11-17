import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NotesState } from './notes.reducer';

export const selectNotesState = createFeatureSelector<NotesState>('notes');

export const selectAllNotes = createSelector(
  selectNotesState,
  (state) => state.notes
);
