import {Component, OnInit} from '@angular/core';
import {UserListItem} from '../user-list-item/user-list-item';
import {CommonModule} from '@angular/common';
import {User} from '../Shared/Models/user';
import {UserService} from '../services/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserListItem, CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserListComponent implements OnInit {

  userList: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe(users => {
      this.userList = users;
    });
  }
}
