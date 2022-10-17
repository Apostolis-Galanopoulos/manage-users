import { EntityState } from '@ngrx/entity';
import { User } from '../models/user.model';

export interface IUserState extends EntityState<User> {
    // additional entities state properties
    selectedUserId: number | null;
}
