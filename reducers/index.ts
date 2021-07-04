import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import products from "./products";
import users from "./users";

const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        products,
        users,
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
