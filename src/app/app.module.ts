import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';  
import { AppComponent } from './app.component';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { TextEntryFormComponent } from './components/text-entry-form/text-entry-form.component';
import { PdfGeneratorComponent } from './components/pdf-generator/pdf-generator.component'; 

const routes: Routes = [
  { path: 'person-form', component: PersonFormComponent },
  { path: 'text-entry-form', component: TextEntryFormComponent },
  { path: 'pdf-generator', component: PdfGeneratorComponent }, 
  { path: '', redirectTo: '/person-form', pathMatch: 'full' }, // Domyślna ścieżka
];

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent,
    TextEntryFormComponent,
    PdfGeneratorComponent, 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
