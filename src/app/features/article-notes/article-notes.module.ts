import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { ArticleNotesRoutingModule } from './article-notes-routing.module';



@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    ArticleNotesRoutingModule
  ]
})
export class ArticleNotesModule { }
