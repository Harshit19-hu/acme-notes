import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'notes',
    pathMatch: 'full',
  },
  {
    path: 'notes',
    loadChildren: () =>
      import('./features/notes-dashboard/notes-dashboard.module').then(
        (m) => m.NotesDashboardModule
      ),
  },
  {
    path: 'notes/text',
    loadChildren: () =>
      import('./features/text-notes/text-notes.module').then(
        (m) => m.TextNotesModule
      ),
  },
  {
    path: 'notes/article',
    loadChildren: () =>
      import('./features/article-notes/article-notes.module').then(
        (m) => m.ArticleNotesModule
      ),
  },
  {
    path: 'notes/picture',
    loadChildren: () =>
      import('./features/picture-notes/picture-notes.module').then(
        (m) => m.PictureNotesModule
      ),
  },
  {
    path: 'notes/document',
    loadChildren: () =>
      import('./features/document-notes/document-notes.module').then(
        (m) => m.DocumentNotesModule
      ),
  },
  {
    path: 'notes/checklist',
    loadChildren: () =>
      import('./features/checklist-notes/checklist-notes.module').then(
        (m) => m.ChecklistNotesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
