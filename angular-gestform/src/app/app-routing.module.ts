import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetlistComponent } from './getlist/getlist.component';

const routes: Routes = [
  {path:'',component:GetlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
