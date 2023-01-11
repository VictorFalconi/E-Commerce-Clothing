import React from "react";
import { useAuth0 } from '@auth0/auth0-react'
import logoProfile from "../NavBar/assets/logoProfile.png";
import styles from '../NavBar/NavBar.module.css'
//hacer la carpeta de cada componente con su module.css


export const LoginButton = () =>{
    const { loginWithRedirect } = useAuth0();
    
    return <button type="button" onClick={()=>loginWithRedirect()}><img src={logoProfile} className={styles.IconProfile} alt='LogIn'/>Login</button>
}