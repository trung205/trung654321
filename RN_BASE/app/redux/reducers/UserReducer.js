import { GET_USER, GET_USER_SUCCESS, GET_USER_FAIL, USERNAME_CHANGE, PASSWORD_CHANGE } from "../actions/type";

 const initState = {
    username: '',
    password: ''
}

function userState(state = initState, action) {
    switch (action.type) {
        case USERNAME_CHANGE: {
            return {
                ...state,
                username: action.payload
            };
        }
        case PASSWORD_CHANGE: {
            return {
                ...state,
                password: action.payload
            };
        }

        default:
            return state;
    }
}
export default userState;














// const initialState = {
//   data: {},
//   isLoading: true,
//   error: null
// };

// export default function(state = initialState, action) {
//   switch (action.type) {
//     case GET_USER: {
//       return { ...state, isLoading: true };
//     }
//     case GET_USER_SUCCESS: {
//       return {
//         ...state,
//         isLoading: false,
//         error: null,
//         data: action.payload
//       };
//     }
//     case GET_USER_FAIL: {

//       return {
//         ...state,
//         error: action.payload,
//         isLoading: false,
//       };
//     }
//     default:
//       return state;
//   }
// }
