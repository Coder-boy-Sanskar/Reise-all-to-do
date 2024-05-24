import React from 'react'
import authStore from '../stores/authStores'
import { useNavigate } from 'react-router-dom';

function LoginForm() {

    const store = authStore();
    const Navigate = useNavigate();

    const handleLogin = async (e) => {
      e.preventDefault();
      console.log("login")
      await store.login(e);

      // Navigate 
      Navigate("/");
    };

  return (
    <div>
        <form onSubmit={handleLogin}>
            <input onChange={store.updateLoginForm} value={store.loginForm.email} type='email' name='email' />
            <input onChange={store.updateLoginForm} value={store.loginForm.password} type='password' name='password' />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm