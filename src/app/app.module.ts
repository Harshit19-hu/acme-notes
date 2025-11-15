import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { TextNotesPageComponent } from './features/text-notes/containers/text-notes-page/text-notes-page.component';
import { TextNoteDetailComponent } from './features/text-notes/containers/text-note-detail/text-note-detail.component';
import { TextNoteFieldsComponent } from './features/text-notes/components/text-note-fields/text-note-fields.component';
import { AppStoreModule } from './state/app-store.module';

@NgModule({
  declarations: [
    AppComponent,
    TextNotesPageComponent,
    TextNoteDetailComponent,
    TextNoteFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
