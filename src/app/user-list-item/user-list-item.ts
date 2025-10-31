import {Component, Input} from '@angular/core';
import {User} from '../Shared/Models/user';
import { CommonModule} from '@angular/common';

@Component({
  selector: 'app-user-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list-item.html',
  styleUrl: './user-list-item.css',
})
export class UserListItem {
  @Input() user?: User;
  @Input() index?: number = 0;
}
