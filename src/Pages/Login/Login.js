import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import ThirdPartyLogin from '../ThirdPartyLogin/ThirdPartyLogin';
import './Login.css'
const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const emailRef = useRef('');
    const passwordRef = useRef(" ");
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,

    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );
    let errorElement;
    if (loading || sending) {
        return <Loading></Loading>
    }
    if (error) {
        errorElement = <p>Error:{error?.message}</p>
    }
    if (user) {

        navigate(from, { replace: true });
    }

    const handleLogin = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleResetPassword = async () => {
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)
    }

    return (


        <div className='container mx-auto w-50 login-container mt-5 '>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" name='password' placeholder="Password" />
                </Form.Group>
                <p className='text-red-600'>{errorElement}</p>
                <Button className='mb-2 form-submit' variant="primary" type="submit">
                    Log In
                </Button>
            </Form>
            <p>Don't have an account yet? <Link className='form-link text-decoration-none' to='/signUp'>Create an account</Link></p>
            <p>Forget Password?<Button to='/home' onClick={handleResetPassword} className='m-2'>Reset Password</Button></p>
            <ThirdPartyLogin></ThirdPartyLogin>
        </div>








    );
};

export default Login;