import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrl: './notes-list.component.scss'
})
export class NotesListComponent {
  @Input() note: any;

  openPdf() {
    if (this.note.data.pdf?.base64) {
      const win = window.open();
      win?.document.write(
        `<iframe width="100%" height="100%" src="${this.note.data.pdf.base64}"></iframe>`
      );
    }
  }
    
}
