import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadNotes, loadNotesSuccess, addNote } from './notes.actions';
import { map, tap } from 'rxjs/operators';
import { NotesStorageService } from '../../core/services/notes-storage.service';

@Injectable()
export class NotesEffects {

  constructor(
    private actions$: Actions,
    private storage: NotesStorageService
  ) {
      console.log("✔ EFFECT INSTANCE CREATED", this);
  console.log("✔ actions$ injected?", this.actions$);
  }

  loadNotes$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadNotes),
      map(() => {
        const notes = this.storage.getNotes();
        return loadNotesSuccess({ notes });
      })
    )
  );

  saveNote$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(addNote),
        tap(({ note }) => {
          
          console.log('local notes effect',note)

          this.storage.saveNote(note);
        })
      ),
    { dispatch: false }
  );
}
