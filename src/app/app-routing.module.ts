import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { ChallengesComponent } from './challenges/challenges.component';
import { AuthGuard } from './_guards';

const routes: Routes = [
  { path: '', component: HomeComponent , canActivate: [AuthGuard] },
  { path: 'about', component: AboutComponent , canActivate: [AuthGuard] },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'login2', component: Login2Component },
  { path: 'challenges', component: ChallengesComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
