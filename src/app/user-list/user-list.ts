import { Component } from '@angular/core';
import {UserListItem} from '../user-list-item/user-list-item';
import {CommonModule} from '@angular/common';
import {User} from '../Shared/Models/user';

@Component({
  selector: 'app-user-list',
  imports: [UserListItem, CommonModule],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserListComponent {

  userList: User[] = [
    {id: 1, firstName: "Saif", lastName: "Ghanchi", hobby: "Football", isActive: true},
    {id: 2, firstName: "Kaif", lastName: "Ghanchi", hobby: "Football", isActive: false},
    {id: 3, firstName: "Mahif", lastName: "Ghanchi", hobby: "Football", isActive: true},
    {id: 4, firstName: "Sahil", lastName: "Ghanchi", hobby: "Football", isActive: true},
    {id: 5, firstName: "Aashim", lastName: "Ghanchi", hobby: "Football", isActive: false},
    {id: 6, firstName: "Sem", lastName: "Ghanchi", hobby: "Football", isActive: true}
  ];
}
