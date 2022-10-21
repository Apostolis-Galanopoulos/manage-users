import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Injectable()
export class UserResolverService implements Resolve<unknown> {

  constructor (
    private readonly userService: UserService
  ) { }

  resolve (
    route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot
  ): Observable<User> {
    const userId = route.params['id'];
    return this.userService.getOne(userId);
  }

}
