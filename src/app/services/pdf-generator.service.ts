import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PdfGeneratorService {
  private apiUrl = 'http://localhost:8000/api'; 

  constructor() { }

  async getTextEntries(): Promise<any[]> {
    const url = `${this.apiUrl}/text-entries`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching text entries:', error);
      throw new Error('Error fetching text entries');
    }
  }

  async getPersonalInfos(): Promise<any[]> {
    const url = `${this.apiUrl}/personal-infos`;
    try {
      const response = await axios.get(url);
      return response.data;
    } catch (error) {
      console.error('Error fetching personal infos:', error);
      throw new Error('Error fetching personal infos');
    }
  }

  async generatePdf(personId: number, textEntryId: number): Promise<Blob> {
    const headers = {
      'Content-Type': 'application/json',
    };
    const body = JSON.stringify({ personId, textEntryId });

    try {
      const response = await axios.post(`${this.apiUrl}/generate-pdf`, body, {
        headers,
        responseType: 'blob'
      });

      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });
      return pdfBlob;
    } catch (error) {
      console.error('Error generating PDF:', error);
      throw new Error('Error generating PDF'); 
    }
  }
}
