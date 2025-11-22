import { Component, OnInit } from '@angular/core';
import { NotesStorageService } from '../../../../core/services/notes-storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {
  notesData: any;
  constructor(
    private storage: NotesStorageService
  ) { }
  ngOnInit(): void {
    this.notesData = this.notesData = {
      savedNote: this.storage.getNotes(),
      activeNote: 'text'
    };
  }
  save(data: any) {

  }
  openForm() {
  }
}
