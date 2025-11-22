import { Injectable } from '@angular/core';
import { Note } from '../models/note-form-config.model';

@Injectable({
  providedIn: 'root'
})
export class NotesStorageService {

  private storageKey = 'notes';
  constructor() {
    console.log("STORAGE CONSTRUCTOR CALLED");
  }
  getNotes(): Note[] {
    return JSON.parse(localStorage.getItem(this.storageKey) || '[]');
  }

  saveNote(note: Note,activeNote:any) {
      const currentNote = {
         id: Date.now().toString(),
         type: activeNote,
         data: note,
         createdAt: new Date().toISOString(),
         updatedAt: new Date().toISOString(),
       };
    console.log('local notes',currentNote)
    const notes = this.getNotes();
    notes.push(currentNote);
    localStorage.setItem(this.storageKey, JSON.stringify(notes));
  }
}
