import produce from "immer";
import { UserType } from "@/types/users";
import {
  // userAction,
  LOAD_USERS_REQUEST,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_ERROR,
} from "@/action/users";

export interface UserStateProps {
  User: Array<UserType>;
  loadUsersLoading: boolean;
  loadUsersSuccess: boolean;
  loadUsersError: object | null;
}

const init: UserStateProps = {
  User: [],
  loadUsersLoading: false,
  loadUsersSuccess: false,
  loadUsersError: null,
};

const users = (state = init, action) =>
  produce(state, (/* draft */) => {
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
