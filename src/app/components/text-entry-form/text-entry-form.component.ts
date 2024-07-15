import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TextEntryService } from '../../services/text-entry.service';

@Component({
  selector: 'app-text-entry-form',
  templateUrl: './text-entry-form.component.html'
})
export class TextEntryFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private textEntryService: TextEntryService) {
    this.form = this.fb.group({
      content: ['']
    });
  }

  async onSubmit() {
    await this.textEntryService.createTextEntry(this.form.value.content);
    this.form.reset();
  }
}
