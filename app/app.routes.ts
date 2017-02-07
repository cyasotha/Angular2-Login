import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }  from './app.home';
import { LoginComponent }  from './app.login';
import { RegisterComponent }  from './app.register';


export const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);