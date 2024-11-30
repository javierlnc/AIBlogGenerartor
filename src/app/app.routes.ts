import { Routes } from '@angular/router';
import { HomeComponent } from '@modules/home/home.component';

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
  {
    path: 'signup',
    loadComponent: () =>
      import('@modules/sign-up/sign-up.component').then(
        (c) => c.SignUpComponent
      ),
  },
  {
    path: 'main',
    loadComponent: () =>
      import('@modules/main/main.component').then((c) => c.MainComponent),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
