import { USER_SIGN_FAIL, USER_SIGN_OUT, USER_SIGN_REQUEST, USER_SIGN_SUCCESS } from "./authconstant";


export const authReducer=(state={}, action)=>{
    switch(action.type){
        case USER_SIGN_REQUEST:
            return {loading: true};
        case USER_SIGN_SUCCESS:
            return {loading: false, userInfo: action.payload};
        case USER_SIGN_FAIL:
            return {loading: false, error: action.payload};
        case USER_SIGN_OUT:
            return {};
        default:
            return state;
    }
}

export default authReducer;