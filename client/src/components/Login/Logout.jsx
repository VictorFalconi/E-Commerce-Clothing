import React from "react";
import { useAuth0 } from '@auth0/auth0-react'
import styles from './Logout.module.css'

export const LogoutButton = () =>{
    const { logout } = useAuth0();
    
    return <button className={styles.button} type="button" onClick={()=>logout()}>Logout</button>
}