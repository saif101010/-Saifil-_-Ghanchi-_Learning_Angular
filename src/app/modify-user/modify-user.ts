import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService} from '../services/user';
import { User } from '../Shared/Models/user';

@Component({
  selector: 'app-modify-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './modify-user.html',
  styleUrl: './modify-user.css'
})
export class ModifyUser implements OnInit {
  userForm: FormGroup;
  isEditMode = false;
  userId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      id: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      hobby: [''],
      isActive: [true]
    });
  }

  ngOnInit(): void {
    const idFromRoute = this.route.snapshot.paramMap.get('id');
    if (idFromRoute) {
      this.isEditMode = true;
      this.userId = +idFromRoute;
      this.userService.getUser(this.userId).subscribe(user => {
        if (user) {
          this.userForm.patchValue(user);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }

    const userData: User = this.userForm.value;

    if (this.isEditMode) {
      this.userService.updateUser(userData).subscribe(() => {
        this.router.navigate(['/users']);
      });
    } else {
      this.userService.addUser(userData).subscribe(() => {
        this.router.navigate(['/users']);
      });
    }
  }

  goBack(): void {
    this.router.navigate(['/users']);
  }
}
