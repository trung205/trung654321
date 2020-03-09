import { combineReducers } from "redux";
import UserReducer from "./UserReducer";
import { RESET } from "../actions/type";
import UserState from "./UserState";
import HomeReducer from "./HomeReducer";
import ProductReducer from "./ProductReducer";


appReducer = combineReducers({
  userReducer: UserReducer,
  userState : UserState,
  homeReducer: HomeReducer, 
  productReducer: ProductReducer,
  
});



const initialState = appReducer({}, {})

export default rootReducer = (state, action) => {
  if (action.type === RESET) {
    state = initialState
  }

  return appReducer(state, action)
}
