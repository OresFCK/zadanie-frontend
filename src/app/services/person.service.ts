import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PersonService {
  private apiUrl = 'http://localhost:8000/api/person';

  async createPerson(person: any) {
    return await axios.post(this.apiUrl, person);
  }
}
