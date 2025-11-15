import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { ChecklistNotesRoutingModule } from './checklist-notes-routing.module';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    ChecklistNotesRoutingModule
  ]
})
export class ChecklistNotesModule { }
