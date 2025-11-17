import { Injectable } from '@angular/core';
import { NOTE_FORM_CONFIGS } from '../config/note-form.config';
import { NoteFormConfig } from '../config/note-type-config';

@Injectable({
  providedIn: 'root'
})
export class NoteFormConfigService {

  getConfig(type: string): NoteFormConfig | undefined {
    return NOTE_FORM_CONFIGS.find(cfg => cfg.type === type);
  }
}
