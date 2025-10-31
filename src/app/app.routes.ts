import { Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list';
import { UserDetail } from './user-detail/user-detail';
import { ModifyUser } from './modify-user/modify-user';
import { PageNotFound } from './page-not-found/page-not-found';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: UserDetail },
  { path: 'modify', component: ModifyUser },
  { path: 'modify/:id', component: ModifyUser },
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: '**', component: PageNotFound }
];
