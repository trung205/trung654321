import {
  GET_HOME,
  GET_HOME_SUCCESS,
  GET_HOME_FAIL
} from "../actions/type";
import reactotron from "reactotron-react-native";

const initialState = {

  isLoading: true,
  data: {},
  error: null
};

export default function (state = initialState, action) {
  //reactotron.log(action,'hasgd')
  switch (action.type) {
    case GET_HOME: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_HOME_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        error: null,
        data: action.payload
      };
    }
    case GET_HOME_FAIL: {

      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    }
    default:
      return state;
  }
}
