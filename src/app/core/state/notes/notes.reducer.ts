import { createReducer, on } from '@ngrx/store';
import { loadNotesSuccess, addNote } from './notes.actions';
import { Note } from '../../models/note-form-config.model';

export interface NotesState {
  notes: Note[];
}

export const initialState: NotesState = {
  notes: []
};

export const notesReducer = createReducer(
  initialState,

  on(loadNotesSuccess, (state, { notes }) => ({
    ...state,
    notes
  })),

  on(addNote, (state, { note }) => {
    console.log("🔥 REDUCER RECEIVED NOTE:", note);
    return {
      ...state,
      notes: [...state.notes, note]
    };
  })
);
