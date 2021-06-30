import produce from "immer";
import { userAction, LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from "../action/users";

const init = {
  loadUsersLoading: false,
  loadUsersSuccess: false,
  loadUsersError: null
};

const users = (state = init, action:userAction) => produce(state, (draft) => {
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
