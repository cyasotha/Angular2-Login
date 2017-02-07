import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './app.home';
import { LoginComponent }  from './app.login';
import { RegisterComponent }  from './app.register';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { routing } from './app.routes';

@NgModule({
  imports:      [ BrowserModule,routing,FormsModule ],
  declarations: [ AppComponent,HomeComponent,LoginComponent,RegisterComponent ],
  bootstrap:    [ AppComponent ],
   providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ]
})
export class AppModule { }