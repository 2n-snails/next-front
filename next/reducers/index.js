import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";
import products from "./products";
import users from "./users";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("하이드레이트", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        products, users
      });
      return combineReducer(state, action);
    }
  }
};

export default rootReducer;
