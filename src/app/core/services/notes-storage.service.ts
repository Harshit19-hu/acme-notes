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

  saveNote(note: Note) {
    console.log('local notes',note)
    const notes = this.getNotes();
    notes.push(note);
    localStorage.setItem(this.storageKey, JSON.stringify(notes));
  }
}
