// src/app/pipes/full-name.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../models/user.interface';

@Pipe({
  name: 'fullName',
  standalone: true
})
export class studentsPipe implements PipeTransform {
  transform(user: User): string {
    if (!user || !user.firstName || !user.lastName) {
      return '';
    }
    return `${user.firstName} ${user.lastName}`;
  }
}
