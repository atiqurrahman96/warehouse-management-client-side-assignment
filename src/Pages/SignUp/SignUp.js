import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [validated, setValidated] = useState(false);
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        navigate('/home')
    }
    const handleSignUpSubmit = event => {
        // const form = event.currentTarget;
        // if (form.checkValidity() === false) {
        //     event.preventDefault();
        //     event.stopPropagation();
        //     return;
        // }

        // setValidated(true);


        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        event.target.reset();



        createUserWithEmailAndPassword(email, password);
    }
    return (

        <div>

            <div className='container mx-auto w-50 login-container mt-5 '>
                <Form onSubmit={handleSignUpSubmit} className='w-100'>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Your Name" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid name.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid email.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" />
                        <Form.Control.Feedback type="invalid">
                            Please provide a valid password.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="Password" name='confirmPassword' placeholder="Confirm Password" />
                        <Form.Control.Feedback type="invalid">
                            Please provide confirm Password.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Button className='mb-2 form-submit' variant="primary" type="submit">
                        Sign Up
                    </Button>

                </Form>
                <p>Already have an account ? <Link className='form-link text-decoration-none' to='/login'>Log in</Link></p>
            </div >

        </div >
    );
};

export default SignUp;