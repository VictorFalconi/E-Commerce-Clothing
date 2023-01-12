import React, { useEffect } from "react";
import { useAuth0 } from '@auth0/auth0-react';
import styles from './Profile.module.css'
import { useDispatch } from "react-redux";


export const Profile = () =>{
  const dispatch = useDispatch()
  const { user, isLoading}  = useAuth0();

  if(isLoading){
    return <div>Loading...</div>
  }

  return (
        <div className={styles.admin}>
          <h2>Admin data</h2>
            <img src={user.picture} alt={user.name}/>
            <h2>{user.name}</h2>
            <p>Email: {user.email}</p>
        </div>
    
  )
}