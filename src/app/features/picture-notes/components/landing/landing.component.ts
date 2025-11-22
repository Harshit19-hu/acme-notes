import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NotesStorageService } from '../../../../core/services/notes-storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

 constructor(
     private storage: NotesStorageService
  ) {}
  notesData:any;
  ngOnInit(): void {
   this.notesData =  this.notesData = {
    savedNote: this.storage.getNotes(),
    activeNote: 'picture'
  };
  }
  openForm() {
  }
}
