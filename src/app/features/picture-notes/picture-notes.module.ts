import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { PictureNotesRoutingModule } from './picture-notes-routing.module';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    PictureNotesRoutingModule
  ]
})
export class PictureNotesModule { }
