import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { DocumentNotesRoutingModule } from './document-notes-routing.module';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    DocumentNotesRoutingModule
  ]
})
export class DocumentNotesModule { }
