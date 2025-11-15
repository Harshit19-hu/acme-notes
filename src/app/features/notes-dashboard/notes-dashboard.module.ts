import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './components/landing/landing.component';
import { NotesDashboardRoutingModule } from './notes-dashboard-routing.module';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    NotesDashboardRoutingModule,
    MatCardModule,
    MatIconModule,
  ]
})
export class NotesDashboardModule { }
