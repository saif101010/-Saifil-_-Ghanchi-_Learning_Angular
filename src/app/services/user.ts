import { Injectable } from '@angular/core';
import {User} from '../Shared/Models/user';
import {USER_LIST} from '../data/mock-users';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = USER_LIST;

  constructor() { }

  getUsers(): Observable<User[]> {
    return of(this.users);
  }

  getUser(id: number): Observable<User | undefined> {
    const user = this.users.find(u => u.id === id);
    return of(user);
  }

  addUser(newUser: User): Observable<User[]> {
    this.users.push(newUser);
    return of(this.users);
  }

  updateUser(updatedUser: User): Observable<User[]> {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
    }
    return of(this.users);
  }

  deleteUser(userId: number): Observable<User[]> {
    this.users = this.users.filter(user => user.id !== userId);
    return of(this.users);
  }
}

