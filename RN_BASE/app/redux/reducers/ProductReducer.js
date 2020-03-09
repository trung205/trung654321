import {
    GET_PRODUCT,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAIL
} from "../actions/type"



const initalState = {
    isLoading: true,
    error: null,
    data: {}
}

export default function (state = initalState, action) {
    switch (action.type) {
        
        case GET_PRODUCT: {
            // console.log('2123')
            return {
                ...state,
                isLoading: true
            };
        }
        case GET_PRODUCT_SUCCESS: {
            // console.log('ghfg')
            return {
                ...state,
                isLoading: false,
                error: null,
                data: action.payload
            };
        }
        case GET_PRODUCT_FAIL: {
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        }
        default:
            return state
    }

}