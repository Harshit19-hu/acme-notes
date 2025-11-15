import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { TextNotesRoutingModule } from './text-notes-routing.module';
@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    TextNotesRoutingModule
  ]
})
export class TextNotesModule { }
