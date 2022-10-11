import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GetlistComponent } from './getlist/getlist.component';
import { NewlistComponent } from './newlist/newlist.component';

const routes: Routes = [
  {path:'',component:GetlistComponent},
  {path:'newlist',component:NewlistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
