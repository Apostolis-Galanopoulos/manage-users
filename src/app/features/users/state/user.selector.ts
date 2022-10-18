import {
  createFeatureSelector,
  createSelector,
  ActionReducerMap,
} from '@ngrx/store';
import { USER_COLLECTION } from '../constants/user.constants';
import { User } from '../models/user.model';
import * as fromUser from './user.reducer';
import { IUserState } from './user.state';

export interface IState {
  users: IUserState;
}

export const reducers: ActionReducerMap<IState> = {
  users: fromUser.userReducer,
};

export const selectUserState = createFeatureSelector<IUserState>(USER_COLLECTION);

export const selectUserIds = createSelector(
  selectUserState,
  fromUser.selectUserIds
);
export const selectUserEntities = createSelector(
  selectUserState,
  fromUser.selectUserEntities
);

export const selectAllUsers = createSelector(
  selectUserState,
  fromUser.selectAllUsers
);
export const selectUserTotal = createSelector(
  selectUserState,
  fromUser.selectUserTotal
);
export const selectCurrentUserId = createSelector(
  selectUserState,
  fromUser.getSelectedUserId
);

export const selectCurrentUser = createSelector(
  selectUserEntities,
  selectCurrentUserId,
  (UserEntities, UserId) => UserId && UserEntities[UserId]
);

export const selectUserById = (props: { id: string }) =>
  createSelector(
      selectAllUsers,
      (entities: User[]): User => {
          return entities.find(user => Number(user.id) === Number(props.id)) as User;
      }
  );

  export const selectUserByPage = (
    props: {
        page_number: number, page_size: number,
    },
) =>
    createSelector(
        selectAllUsers,
        (entities: User[]): ({ users: User[], totalLength: number }) => {
            let users: User[] = entities;
            const totalLength: number = entities.length;
            /**
             * get a slice of users by page
             */
            users = users.slice((props.page_number) * props.page_size, (props.page_number + 1) * props.page_size) as User[];

            return { users, totalLength };
        },
    );
