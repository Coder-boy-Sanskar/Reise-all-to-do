import React, { useEffect } from 'react'
import authStore from '../stores/authStores';
import { Navigate } from 'react-router-dom';

function RequireAuth(props) {

    const store = authStore();

    useEffect(() =>{
        if(store.loggedIn === null){
            store.checkAuth();
        }
    },[]);

    if(store.loggedIn === null){
        return <div>Loading</div>
    }
    
    if(store.loggedIn === false) {
        return <Navigate to="/login" />
    }

  return (
    <div>{props.children}</div>
  )
}

export default RequireAuth