import { createAction, props } from '@ngrx/store';
import { Note } from '../../models/note-form-config.model';

export const loadNotes = createAction('[Notes] Load Notes');

export const loadNotesSuccess = createAction(
  '[Notes] Load Notes Success',
  props<{ notes: Note[] }>()
);

export const addNote = createAction(
  '[Notes] Add Note',
  props<{ note: Note }>()
);
