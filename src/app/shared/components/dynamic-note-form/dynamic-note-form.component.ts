import { Component, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NoteFormConfigService } from '../../../core/services/note-form-config.service';
import { Store } from '@ngrx/store';
import { NotesStorageService } from '../../../core/services/notes-storage.service';

@Component({
  selector: 'app-dynamic-note-form',
  templateUrl: './dynamic-note-form.component.html',
  styleUrls: ['./dynamic-note-form.component.scss']
})
export class DynamicNoteFormComponent implements OnChanges {

  @Input() noteType!: string;
  @Output() formSubmit = new EventEmitter<any>();

  form!: FormGroup;
  fields: any[] = [];
  preview: any = {}; 

  constructor(
    private fb: FormBuilder,
    private configService: NoteFormConfigService,
    private store: Store,
     private storage: NotesStorageService
  ) {}

  ngOnChanges() {
    const config = this.configService.getConfig(this.noteType);
    if (!config) return;

    this.fields = config.fields;

    const controls: any = {};
    config.fields.forEach(field => {
      controls[field.name] = field.required
        ? ['', Validators.required]
        : [''];
    });

    this.form = this.fb.group(controls);
  }

  onFileSelect(event: any, controlName: string) {
    const file = event.target.files[0];
    if (file) this.form.patchValue({ [controlName]: file });
  }


onImageSelect(event: any, controlName: string) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    const base64 = reader.result as string;

    // Store Base64 in FormControl
    this.form.patchValue({ [controlName]: base64 });

    // Show preview
    this.preview[controlName] = base64;
  };

  reader.readAsDataURL(file);
}


  submit() {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }

}
