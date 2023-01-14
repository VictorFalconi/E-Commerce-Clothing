import React from "react";
import { useDispatch} from "react-redux";
import { useAuth0 } from '@auth0/auth0-react'
import logoProfile from "../NavBar/assets/logoProfile.png";
import styles from '../NavBar/NavBar.module.css'
import { allUsers } from "../../redux/actions";

//hacer la carpeta de cada componente con su module.css


export const LoginButton = () =>{
   const dispatch = useDispatch();
    const { loginWithPopup } = useAuth0();
    const handlelogin = (user) => {
    loginWithPopup() 
    dispatch(allUsers)
    }
    
    
    return <button type="button" onClick={()=>handlelogin()}><img src={logoProfile} className={styles.IconProfile} alt='LogIn'/>Login</button>
}