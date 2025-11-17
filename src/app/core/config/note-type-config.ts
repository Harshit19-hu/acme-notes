export interface NoteFormField {
    name: string;          
    label: string;         
    type: 'text' | 'textarea' | 'file' | 'image' | 'pdf';
    required?: boolean;
  }
  
  export interface NoteFormConfig {
    type: string;                
    fields: NoteFormField[];     
  }
  