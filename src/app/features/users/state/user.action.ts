import { Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const LOAD_USERS = '[User/API] Load Users';
export const FETCH_USERS = '[User/API] Fetch Users';
export const ADD_USER = '[User/API] Add User';
export const UPDATE_USER = '[User/API] Update User';
export const DELETE_USER = '[User/API] Delete User';
export const CLEAR_USERS = '[User/API] Clear Users';

export const fetchUsers = createAction(FETCH_USERS);

export const loadUsers = createAction(LOAD_USERS, props<{ users: User[] }>());
export const addUser = createAction(ADD_USER, props<{ user: User }>());
export const updateUser = createAction(UPDATE_USER, props<{ update: Update<User> }>());
export const deleteUser = createAction(DELETE_USER, props<{ id: number }>());
export const clearUsers = createAction(CLEAR_USERS);
