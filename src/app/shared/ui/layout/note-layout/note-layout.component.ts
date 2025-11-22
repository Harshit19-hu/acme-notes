import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotesStorageService } from '../../../../core/services/notes-storage.service';

@Component({
  selector: 'app-note-layout',
  templateUrl: './note-layout.component.html',
  styleUrl: './note-layout.component.scss'
})
export class NoteLayoutComponent {
  @Input() notes: any = {};
  @Output() addNotes = new EventEmitter<any>();
  selectedNote: any = null;
 constructor(
     private storage: NotesStorageService
  ) {}
  selectNote(note: any) {
    this.selectedNote = note;
  }
  addNote() {
    this.selectedNote = null;
      this.addNotes.emit();
  }
  save(note: any) {
    this.storage.saveNote(note, this.notes.activeNote)
  }

}
