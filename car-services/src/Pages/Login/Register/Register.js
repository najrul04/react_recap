import React from 'react';
import { Button } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const handleRegister = event =>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(event.target.name.value, event.target.email.value, event.target.password.value)
        
        createUserWithEmailAndPassword(email, password)
    }

    const navigateLogin = () =>{
        navigate('/login')
    }
    if(user){
        navigate('/home')
    }
    return (
        <div className='register-form'>
            <h2 style={{textAlign: 'center'}}>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name'/>
                
                <input type="email" name="email" id="" placeholder='Email Address' required/>
                
                <input type="password" name="password" id="" placeholder='Password' required/>
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms"> Accept Terms and Conditions</label>
                {/* <input type="submit" value="Register" /> */}
                {/* <button type='submit'>Register</button> */}
                <Button className='register_button' variant="primary w-50 mx-auto d-block mb-2 mt-2" type="submit">
          Register
        </Button>
            </form>
            <p>Already have an account? <Link to="/login" className='text-primary pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link> </p>
            <SocialLogin/>
        </div>
    );
};

export default Register;