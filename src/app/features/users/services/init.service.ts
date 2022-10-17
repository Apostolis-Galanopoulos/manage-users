import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchUsers } from '../state/user.action';
import { IUserState } from '../state/user.state';

@Injectable()
export class InitService {

  constructor (
    private readonly store: Store<IUserState>
  ) { }

  init () {
    this.loadUsers();
  }

  loadUsers () {
    this.store.dispatch(fetchUsers());
  }
}
