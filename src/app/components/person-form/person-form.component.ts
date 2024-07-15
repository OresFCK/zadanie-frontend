import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PersonService } from '../../services/person.service';

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html'
})
export class PersonFormComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private personService: PersonService) {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      address: ['']
    });
  }

  async onSubmit() {
    await this.personService.createPerson(this.form.value);
    this.form.reset();
  }
}
