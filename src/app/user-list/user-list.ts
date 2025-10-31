import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../Shared/Models/user';
import { UserListItem } from '../user-list-item/user-list-item';
import { UserService} from '../services/user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [UserListItem, CommonModule, RouterLink],
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
