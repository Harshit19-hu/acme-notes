import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-note-layout',
  templateUrl: './note-layout.component.html',
  styleUrl: './note-layout.component.scss'
})
export class NoteLayoutComponent {
  @Input() notes: any[] = [];
  @Output() addNotes = new EventEmitter<any>();
  selectedNote: any = null;

  selectNote(note: any) {
    this.selectedNote = note;
  }
  addNote() {
      this.addNotes.emit();
  }

}
