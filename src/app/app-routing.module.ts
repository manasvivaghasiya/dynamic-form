import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pluck } from 'rxjs';
import { FormComponent } from './form/form.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {path:'form',component:FormComponent},
  {path:'student',component:StudentFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
