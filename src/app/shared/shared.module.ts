import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './ui/layout/page-header/page-header.component';
import { NoteLayoutComponent } from './ui/layout/note-layout/note-layout.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { DynamicNoteFormComponent } from './components/dynamic-note-form/dynamic-note-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NotesListComponent } from './components/notes-list/notes-list.component';

@NgModule({
  declarations: [
    PageHeaderComponent,
    NoteLayoutComponent,
    DynamicNoteFormComponent,
    NotesListComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    DynamicNoteFormComponent,
    NotesListComponent,
    PageHeaderComponent,
    NoteLayoutComponent,
    MatButtonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  
})
export class SharedModule { }
