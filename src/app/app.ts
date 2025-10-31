import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './Shared/Models/user';
import {NgForOf} from '@angular/common';
import {UserListComponent} from './user-list/user-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, UserListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title:string = 'Saif';

}
