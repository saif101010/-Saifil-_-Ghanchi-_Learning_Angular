import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {User} from './Shared/Models/user';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title:string = 'Saif';

  // Initializing an array and creating 6 instances of my project
  userList: User[] = [
    {id: 1, firstName: "Saif", lastName: "Ghanchi", hobby: "Football", isActive: true},
    {id: 2, firstName: "Kaif", lastName: "Ghanchi", hobby: "Football", isActive: false},
    {id: 3, firstName: "Mahif", lastName: "Ghanchi", hobby: "Football", isActive: true},
    {id: 4, firstName: "Sahil", lastName: "Ghanchi", hobby: "Football", isActive: true},
    {id: 5, firstName: "Aashim", lastName: "Ghanchi", hobby: "Football", isActive: false},
    {id: 6, firstName: "Sem", lastName: "Ghanchi", hobby: "Football", isActive: true}

  ]
}
