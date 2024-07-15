import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TextEntryService {
  private apiUrl = 'http://127.0.0.1:8000/api/text-entry';

  async createTextEntry(content: string) {
    return await axios.post(this.apiUrl, { content });
  }
}
