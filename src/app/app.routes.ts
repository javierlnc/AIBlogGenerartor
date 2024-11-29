import { Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/pages/home.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'signin',
    loadComponent: () =>
      import('@modules/sign-in/sign-in.component').then(
        (c) => c.SignInComponent
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
