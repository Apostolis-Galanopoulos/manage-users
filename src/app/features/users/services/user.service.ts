import { Injectable } from '@angular/core';
import { HttpService } from '@network/http/http.service';
import { Observable } from 'rxjs/internal/Observable';
import { ENDPOINT_USERS } from '../constants/user.constants';
import { User } from '../models/user.model';

@Injectable()
export class UserService {

  constructor (
    private readonly httpService: HttpService
  ) { }

  getAll (): Observable<User[]> {
    return this.httpService.get(ENDPOINT_USERS);
  }
}
