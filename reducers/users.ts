import produce from 'immer';
import { UserType } from '../types/users.d';
import {
  userAction,
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
} from '../action/users';

export interface UserStateProps {
  User: Array<UserType>;
  loadUsersLoading: boolean;
  loadUsersSuccess: boolean;
  loadUsersError?: any;
}

const init: UserStateProps = {
  User: [],
  loadUsersLoading: false,
  loadUsersSuccess: false,
};

const users = (state = init, action: userAction): UserStateProps =>
  produce(state, () => {
    switch (action) {
      case LOAD_USERS_REQUEST:
        break;
      case LOAD_USERS_SUCCESS:
        break;
      case LOAD_USERS_ERROR:
        break;
      default:
        break;
    }
  });

export default users;
