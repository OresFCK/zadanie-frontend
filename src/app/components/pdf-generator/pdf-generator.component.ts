import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PdfGeneratorService } from '../../services/pdf-generator.service';

@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html'
})
export class PdfGeneratorComponent implements OnInit {
  form: FormGroup;
  textEntries: any[] = [];
  personalInfos: any[] = [];

  constructor(private fb: FormBuilder, private pdfService: PdfGeneratorService) {
    this.form = this.fb.group({
      personId: [''],
      textEntryId: ['']
    });
  }

  ngOnInit() {
    this.fetchTextEntries();
    this.fetchPersonalInfos();
  }

  async fetchTextEntries() {
    try {
      this.textEntries = await this.pdfService.getTextEntries();
    } catch (error) {
      console.error('Error fetching text entries:', error);
    }
  }

  async fetchPersonalInfos() {
    try {
      this.personalInfos = await this.pdfService.getPersonalInfos();
    } catch (error) {
      console.error('Error fetching personal infos:', error);
    }
  }

  async onSubmit() {
    const { personId, textEntryId } = this.form.value;
    try {
      const pdfBlob = await this.pdfService.generatePdf(personId, textEntryId);
      this.downloadPdf(pdfBlob);
      this.form.reset();
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  }

  private downloadPdf(blob: Blob) {
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'document.pdf';
    link.click();
  }
}
