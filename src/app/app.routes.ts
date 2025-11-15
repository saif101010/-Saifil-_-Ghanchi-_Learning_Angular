// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { user-listComponent } from './user-list/user-list';
// REMOVE imports for components you are about to lazy load
// import { ModifyListItemComponent } from './modify-list-item/modify-list-item.component';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  // Default route, redirects to the main student list
  { path: '', redirectTo: '/students', pathMatch: 'full' },

  // EAGER LOADED: This component's code loads on startup
  { path: 'students', component: StudentListComponent },

  // LAZY LOADED: This component's code only loads when a user navigates here
  {
    path: 'students/:id', // The detail view from Assignment 5 bonus
    loadComponent: () => import('./student-detail/student-detail.component').then(m => m.StudentDetailComponent)
  },

  // LAZY LOADED: The modify component
  {
    path: 'modify-student/:id', // Assuming your route is like this
    loadComponent: () => import('./modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)
  },

  // LAZY LOADED: The page-not-found component
  {
    path: '**', // Wildcard route
    loadComponent: () => import('./page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)
  }
];
