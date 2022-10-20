import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from '../models/user.model';
import * as UserActions from './user.action';
import { IUserState } from './user.state';

export const adapter: EntityAdapter<User> = createEntityAdapter<User>({
  sortComparer: sortByDate,
});

export const initialState: IUserState = adapter.getInitialState({
    selectedUserId: null,
});

export function sortByDate (userA: User, userB: User): number {
  return (new Date(userB.createAt).getTime() - new Date(userA.createAt).getTime());
}

export const userReducer = createReducer(
    initialState,
    on(UserActions.addUser, (state, { user }) => {
        return adapter.addOne(user, state);
    }),
    on(UserActions.updateUser, (state, { update }) => {
        return adapter.updateOne(update, state);
    }),
    on(UserActions.deleteUser, (state, { id }) => {
        return adapter.removeOne(id, state);
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
