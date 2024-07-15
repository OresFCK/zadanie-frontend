import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonFormComponent } from './components/person-form/person-form.component';
import { TextEntryFormComponent } from './components/text-entry-form/text-entry-form.component';

const routes: Routes = [
  { path: 'person-form', component: PersonFormComponent },
  { path: 'text-entry-form', component: TextEntryFormComponent },
  { path: '', redirectTo: '/person-form', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
