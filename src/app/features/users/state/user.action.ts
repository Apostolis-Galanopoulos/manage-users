import { EntityMap, EntityMapOne, Predicate, Update } from '@ngrx/entity';
import { createAction, props } from '@ngrx/store';
import { User } from '../models/user.model';

export const LOAD_USERS = '[User/API] Load Users';
export const FETCH_USERS = '[User/API] Fetch Users';
export const ADD_USERS = '[User/API] Add Users';
export const UPSERT_USERS = '[User/API] Upsert Users';
export const SET_USER = '[User/API] Set User';
export const UPSERT_USER = '[User/API] Upsert User';
export const ADD_USER = '[User/API] Add User';
export const UPDATE_USER = '[User/API] Update User';
export const UPDATE_USERS = '[User/API] Update Users';
export const MAP_USERS = '[User/API] Map Users';
export const MAP_USER = '[User/API] Map User';
export const DELETE_USERS = '[User/API] Delete Users';
export const DELETE_USER = '[User/API] Delete User';
export const DELETE_BY_PREDICATE_USER = '[User/API] Delete Users By Predicate';
export const CLEAR_USERS = '[User/API] Clear Users';

export const fetchUsers = createAction(FETCH_USERS);

export const loadUsers = createAction(LOAD_USERS, props<{ users: User[] }>());
export const setUser = createAction(SET_USER, props<{ user: User }>());
export const upsertUser = createAction(UPSERT_USER, props<{ user: User }>());
export const addUser = createAction(ADD_USER, props<{ user: User }>());
export const addUsers = createAction(ADD_USERS, props<{ users: User[] }>());
export const upsertUsers = createAction(UPSERT_USERS, props<{ users: User[] }>());
export const updateUser = createAction(UPDATE_USER, props<{ update: Update<User> }>());
export const updateUsers = createAction(UPDATE_USERS, props<{ updates: Update<User>[] }>());
export const mapUser = createAction(MAP_USER, props<{ entityMap: EntityMapOne<User> }>());
export const mapUsers = createAction(MAP_USERS, props<{ entityMap: EntityMap<User> }>());
export const deleteUser = createAction(DELETE_USER, props<{ id: string }>());
export const deleteUsers = createAction(DELETE_USERS, props<{ ids: string[] }>());
export const deleteUsersByPredicate = createAction(DELETE_BY_PREDICATE_USER, props<{ predicate: Predicate<User> }>());
export const clearUsers = createAction(CLEAR_USERS);
