import React from 'react';
import google from '../../images/icons/google.png'
import github from '../../images/icons/github.png'
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
const ThirdPartyLogin = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if (error) {
        return <p>Error:{error.message}</p>
    }
    if (user) {
        navigate('/home');
    }
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div className='bg-green-600 w-52 h-1'></div>
                <p className='m-2'>OR</p>
                <div className='bg-green-600 w-52 h-1'></div>
            </div>

            <button onClick={() => signInWithGoogle()} className='btn btn-primary p-2 rounded '>
                <img style={{ width: '30px' }} src={google} alt="" />
                <span>Continue with Google</span>
            </button>
            <br />
            <button className='btn btn-primary p-2 rounded mt-2'>
                <img style={{ width: '30px' }} src={github} alt="" />
                <span>Continue with github</span>
            </button>


        </div>
    );
};

export default ThirdPartyLogin;