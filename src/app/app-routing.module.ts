import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { pluck } from 'rxjs';
import { FormComponent } from './form/form.component';
import { PluseComponent } from './pluse/pluse.component';

const routes: Routes = [
  {path:'form',component:FormComponent},
  {path:'pluse',component:PluseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
