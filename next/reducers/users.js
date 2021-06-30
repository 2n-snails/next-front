import produce from "immer";
import { LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, LOAD_USERS_ERROR } from "../action/users";

const init = {
  loadUsersLoading: false,
  loadUsersSuccess: false,
  loadUsersError: null
};

const users = (state = init, action) => produce(state, (draft) => {
  switch (action.type) {
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
