
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import { useState } from 'react';


const SignUp = () => {
    const [error, setError] = useState('')
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        userError,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    if (user) {
        navigate('/home')
        console.log(user, 'user');
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    const handleSignUpSubmit = async (event) => {



        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if (password !== confirmPassword) {
            setError('Password did not match');
            return;
        }
        if (password.length < 8) {
            setError('Your password must be 8 characters')
            return;
        }

        event.target.reset();
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');

    }
    return (

        <div>

            <div className='container mx-auto w-50 login-container mt-5 '>
                <Form onSubmit={handleSignUpSubmit} className='w-100'>
                    <Form.Group className="mb-3" controlId="">
                        <Form.Label>Enter your name</Form.Label>
                        <Form.Control type="text" name='name' placeholder="Enter Your Name" />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" />

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

                    </Form.Group>
                    <p className='text-red-700'>{error}</p>

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