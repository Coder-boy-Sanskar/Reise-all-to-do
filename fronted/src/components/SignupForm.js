import React from 'react'
import authStore from '../stores/authStores';
import { useNavigate } from 'react-router-dom';

function SignupForm() {

    const store = authStore();
    const navigate = useNavigate();
    const handleSignup = async (e)=>{
        e.preventDefault();
        await store.signup();
        navigate("/login");
    };

  return (
    <div>
        <form onSubmit={handleSignup}>
            <input onChange={store.updateSignupForm} value={store.SignupForm.email} type='email' name='email' />
            <input onChange={store.updateSignupForm} value={store.SignupForm.password} type='password' name='password' />
            <button type='submit'>Signup</button>
        </form>
    </div>
  )
}

export default SignupForm