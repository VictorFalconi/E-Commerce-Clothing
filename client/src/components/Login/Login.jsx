import React from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import logoProfile from "../NavBar/assets/logoProfile.png";
import styles from "../NavBar/NavBar.module.css";
import { allUsers } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";


//hacer la carpeta de cada componente con su module.css

export const LoginButton = () => {
  const dispatch = useDispatch();
  const { loginWithPopup } = useAuth0();
  const handlelogin = () => {
    loginWithPopup();
    dispatch(allUsers);
  };

  return (
    <button className={styles.loginButton} type="button" onClick={() => handlelogin()}>
        <FontAwesomeIcon className={styles.login} icon={faUser}></FontAwesomeIcon>
    </button>
  );
};
