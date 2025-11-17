import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicNoteFormComponent } from './dynamic-note-form.component';

describe('DynamicNoteFormComponent', () => {
  let component: DynamicNoteFormComponent;
  let fixture: ComponentFixture<DynamicNoteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DynamicNoteFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicNoteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
