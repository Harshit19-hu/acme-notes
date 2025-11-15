import { Component } from '@angular/core';
interface NoteTile {
  id: string;
  title: string;
  description: string;
  icon?: string;
  route?: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  tiles: NoteTile[] = [
    { id: 'text',  icon: 'edit_note', title: 'Text Notes', description: 'Simple plain text notes for quick capture.', route: '/notes/text' },
    { id: 'article',  icon: 'article', title: 'Article Notes', description: 'Well-formatted long-form article notes.', route: '/notes/article' },
    { id: 'picture',  icon: 'image',title: 'Picture Notes', description: 'Store images with visual notes and tags.', route: '/notes/picture' },
    { id: 'document',  icon: 'description', title: 'Document Notes', description: 'Upload PDFs and documents with metadata.', route: '/notes/document' },
    { id: 'checklist',  icon: 'checklist', title: 'Checklist', description: 'Manage tasks and to-dos with checklists.', route: '/notes/checklist' },
    { id: 'other',   icon: 'widgets', title: 'Other Notes', description: 'Miscellaneous notes of any kind.', route: '/notes/other' },
  ];

  onTileClick(tile: NoteTile) {
    console.log('Tile clicked:', tile);
  }
}
