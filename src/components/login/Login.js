import React,{useState} from 'react';
import './Login.css';
import {useDispatch,useSelector} from 'react-redux';
import {signin} from '../../store/auth/authActions';
import Loading from '../shared/Loading';
import MessageBox from '../shared/MessageBox';

function Login() {
    const [email, setEmail]= useState('');
    const [password, setPassword] = useState('');
    
    const auth = useSelector(state=> state.auth);
    const {loading, error}= auth;

    const dispatch = useDispatch();
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(signin(email, password));
    }

    return (
        <div className='login'>
            <div className='login-container'>
                <form onSubmit={handleSubmit}>
                    <div className='login-div'>
                    <div className='login-title'>Sign-In</div>
                    <div className='input-div'>
                    <span className='form-labels'>Username or Email</span>
                       <input type='text' 
                       className='login-input' 
                       placeholder='Username'
                       id='Email'
                       onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div className='input-div'>
                    <span className='form-labels'>Password</span>
                       <input type='password' 
                       className='login-input' 
                       placeholder='Password'
                       id='Password'
                       onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                       <button type='submit' className='btn-login'>Login</button>
                    </div>
                </form>
            </div>

            <div className='create-acc-container'>
                <div className='create-acc-title'><span>___________ New To Amazon? ___________</span></div>
                <div><button className='btn-create-acc'>Create Your Amazon Account</button></div>
            </div>
            
        </div>
    )
}

export default Login;


