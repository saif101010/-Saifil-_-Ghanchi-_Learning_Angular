import {Component, OnInit, signal} from '@angular/core';
import {User} from './Shared/Models/user';
import {UserListComponent} from './user-list/user-list';
import {UserListItem} from './user-list-item/user-list-item';
import {UserService} from './services/user';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ UserListComponent, UserListItem ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  title:string = 'Saif';
  singleUser: User | undefined;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUser(3).subscribe(user => {
      this.singleUser = user;
    });
  }
}
