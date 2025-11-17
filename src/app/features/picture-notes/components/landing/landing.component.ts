import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NotesStorageService } from '../../../../core/services/notes-storage.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent implements OnInit {

  @ViewChild('formTemplate') formTemplate!: TemplateRef<any>;
  @ViewChild('layoutTemplate') layoutTemplate!: TemplateRef<any>;
 constructor(
     private storage: NotesStorageService
  ) {}
  notesData:any;
  ngOnInit(): void {
   this.notesData =  this.storage.getNotes()
  }
  activeTemplate!: TemplateRef<any>;
  noteType= 'picture';
  

  ngAfterViewInit() {
    this.activeTemplate = this.formTemplate;  // default
  }

  save(note: any) {
   const notes = {
      id: Date.now().toString(),
      type: this.noteType,
      data: note,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    this.storage.saveNote(notes)
    // this.store.dispatch(addNote({ note }));
    this.activeTemplate = this.layoutTemplate;
  }

  openForm() {
    // Toggle back to form view
    this.activeTemplate = this.formTemplate;
  }
  viewAllNotes(){
    this.activeTemplate = this.layoutTemplate;
  }
}
