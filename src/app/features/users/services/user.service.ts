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

  /**
   *
   * @returns
   */
  getAll (): Observable<User[]> {
    return this.httpService.get(`${ENDPOINT_USERS}?_sort=createAt`);
  }
  /**
   *
   * @param user
   * @returns
   */
  create (user: User): Observable<User> {
    const event = new Date();
    user.createAt = event.toISOString();
    user.updateAt = '';
    return this.httpService.post(ENDPOINT_USERS, user);
  }
  /**
   *
   * @param user
   * @returns
   */
  update (user: User): Observable<User> {
    const event = new Date();
    user.updateAt = event.toISOString();
    return this.httpService.post(ENDPOINT_USERS, user);
  }
/**
 *
 * @param id
 * @returns
 */
  gteOne (id: number): Observable<User> {
    return this.httpService.get(`${ENDPOINT_USERS}/${id}`);
  }
  /**
   *
   * @param id
   * @returns
   */
  delete (id: number): Observable<string> {
    return this.httpService.delete(`${ENDPOINT_USERS}/${id}`);
  }
}
