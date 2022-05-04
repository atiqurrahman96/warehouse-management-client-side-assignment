import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ThirdPartyLogin from '../ThirdPartyLogin/ThirdPartyLogin';
import './Login.css'
const Login = () => {
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {
        navigate('/home')
    }
    const handleLogin = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);
    }
    return (


        <div className='container mx-auto w-50 login-container mt-5 '>
            <Form onSubmit={handleLogin}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>

                <Button className='mb-2 form-submit' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>Don't have an account yet? <Link className='form-link text-decoration-none' to='/signUp'>Create an account</Link></p>
            <ThirdPartyLogin></ThirdPartyLogin>
        </div>








    );
};

export default Login;