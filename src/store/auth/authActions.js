import {USER_SIGN_REQUEST, USER_SIGN_SUCCESS, USER_SIGN_FAIL, USER_SIGN_OUT} from './authconstant';
import Axios from 'axios';

export const signin=(Email, Password)=>async(dispatch)=>{
    dispatch({type: USER_SIGN_REQUEST, payload: {Email, Password}});
    try{
        const {data} = await Axios.post('/api/users/signin', {Email, Password});
        dispatch({type: USER_SIGN_SUCCESS, payload: data});
        localStorage.setItem('userInfo', JSON.stringify(data));
    }catch(error){
        dispatch({type: USER_SIGN_FAIL, payload: error.response 
            && error.response.data.message ? error.response.data.message : error.message});
    }
}

export const signout=()=>(dispatch)=>{
    localStorage.removeItem('userInfo');
    dispatch({type: USER_SIGN_OUT});
}