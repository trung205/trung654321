import { GET_INFO, GET_INFO_SUCCESS, GET_INFO_FAIL } from "../actions/type";

const initState = {
    isLoading: true,
    data: {},
    error: null
}

function userState(state = initState, action) {
    switch (action.type) {
        case GET_INFO: {
            return {
                ...state,
                isLoading: true
            };
        }
        case GET_INFO_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload
            };
        }
        case GET_INFO_FAIL: {
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }
        }

        default:
            return state;
    }
}
export default userState;