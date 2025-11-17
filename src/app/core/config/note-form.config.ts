import { NoteFormConfig } from "./note-type-config";

export const NOTE_FORM_CONFIGS: NoteFormConfig[] = [

  {
    type: 'text',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'text', label: 'Text', type: 'textarea', required: true }
    ]
  },

  {
    type: 'picture',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'image', label: 'Image', type: 'image', required: true },
      { name: 'description', label: 'Description', type: 'textarea' }
    ]
  },

  {
    type: 'document',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'pdf', label: 'Upload PDF', type: 'pdf', required: true }
    ]
  },

  {
    type: 'checklist',
    fields: [
      { name: 'title', label: 'Title', type: 'text', required: true },
      { name: 'items', label: 'Items', type: 'textarea' }
    ]
  }

];
