import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './ui/layout/page-header/page-header.component';
import { NoteLayoutComponent } from './ui/layout/note-layout/note-layout.component';
import { NoteListComponent } from './ui/notes/note-list/note-list.component';
import { NoteCardComponent } from './ui/notes/note-card/note-card.component';
import { NoteFormShellComponent } from './ui/notes/note-form-shell/note-form-shell.component';
import { NoteDetailShellComponent } from './ui/notes/note-detail-shell/note-detail-shell.component';
import { FilterBarComponent } from './ui/notes/filter-bar/filter-bar.component';
import { TextFieldComponent } from './ui/form-controls/text-field/text-field.component';
import { TextareaFieldComponent } from './ui/form-controls/textarea-field/textarea-field.component';
import { FileUploadFieldComponent } from './ui/form-controls/file-upload-field/file-upload-field.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { DragDropDirective } from './directives/drag-drop.directive';
import { TruncatePipe } from './pipes/truncate.pipe';
import { NoteTypeLabelPipe } from './pipes/note-type-label.pipe';



@NgModule({
  declarations: [
    PageHeaderComponent,
    NoteLayoutComponent,
    NoteListComponent,
    NoteCardComponent,
    NoteFormShellComponent,
    NoteDetailShellComponent,
    FilterBarComponent,
    TextFieldComponent,
    TextareaFieldComponent,
    FileUploadFieldComponent,
    AutofocusDirective,
    DragDropDirective,
    TruncatePipe,
    NoteTypeLabelPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
