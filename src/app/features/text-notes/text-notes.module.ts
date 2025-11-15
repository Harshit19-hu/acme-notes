import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextNotesPageComponent } from './containers/text-notes-page/text-notes-page.component';
import { TextNoteDetailComponent } from './containers/text-note-detail/text-note-detail.component';
import { TextNoteFieldsComponent } from './components/text-note-fields/text-note-fields.component';



@NgModule({
  declarations: [
    TextNotesPageComponent,
    TextNoteDetailComponent,
    TextNoteFieldsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TextNotesModule { }
