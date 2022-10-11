import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetlistComponent } from './getlist/getlist.component';
import { NewlistComponent } from './newlist/newlist.component';

@NgModule({
  declarations: [
    AppComponent,
    GetlistComponent,
    NewlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
