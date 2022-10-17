import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as UserActions from './user.action';
import { IUserState } from './user.state';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>();

export const initialState: IUserState = adapter.getInitialState({
    selectedUserId: null,
});

export const userReducer = createReducer(
    initialState,
    on(UserActions.addUser, (state, { user }) => {
        return adapter.addOne(user, state);
    }),
    on(UserActions.setUser, (state, { user }) => {
        return adapter.setOne(user, state);
    }),
    on(UserActions.upsertUser, (state, { user }) => {
        return adapter.upsertOne(user, state);
    }),
    on(UserActions.addUsers, (state, { users }) => {
        return adapter.addMany(users, state);
    }),
    on(UserActions.upsertUsers, (state, { users }) => {
        return adapter.upsertMany(users, state);
    }),
    on(UserActions.updateUser, (state, { update }) => {
        return adapter.updateOne(update, state);
    }),
    on(UserActions.updateUsers, (state, { updates }) => {
        return adapter.updateMany(updates, state);
    }),
    on(UserActions.mapUser, (state, { entityMap }) => {
        return adapter.mapOne(entityMap, state);
    }),
    on(UserActions.mapUsers, (state, { entityMap }) => {
        return adapter.map(entityMap, state);
    }),
    on(UserActions.deleteUser, (state, { id }) => {
        return adapter.removeOne(id, state);
    }),
    on(UserActions.deleteUsers, (state, { ids }) => {
        return adapter.removeMany(ids, state);
    }),
    on(UserActions.deleteUsersByPredicate, (state, { predicate }) => {
        return adapter.removeMany(predicate, state);
    }),
    on(UserActions.loadUsers, (state, { users }) => {
        return adapter.setAll(users, state);
    }),
    on(UserActions.clearUsers, state => {
        return adapter.removeAll({ ...state, selectedUserId: null });
    })
);

export const getSelectedUserId = (state: IUserState) => state.selectedUserId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of User ids
export const selectUserIds = selectIds;

// select the dictionary of User entities
export const selectUserEntities = selectEntities;

// select the array of Users
export const selectAllUsers = selectAll;

// select the total User count
export const selectUserTotal = selectTotal;
