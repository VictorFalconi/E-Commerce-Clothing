import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux"
import logo from "./assets/iconHome.jpeg";
import logoProfile from "./assets/logoProfile.png";
import { LoginButton } from "../Login/Login";
import { LogoutButton } from "../Login/Logout";
import { useAuth0 } from '@auth0/auth0-react'
import { Profile } from "../Login/Profile";

const NavBar = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  const users = useSelector((state)=>state.users)
  const cart = useSelector((state)=> state.cart);
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
      e.preventDefault()
      navigate(`/searchResults/${name}`)
      setName('')
  }

  const { user, isAuthenticated } = useAuth0();

  // con el email puedo buscar en la BDD si el usuario es Admin, y hacer un renderizado condicional para mostrar la dashboard
  //   const userEmail = user.email  
  
  return (
    <div>
      <div className={styles.navbar}>
        <img src={logo} onClick={handleClick}></img>
        {/* {path !== '/' ? null : <SearchBar></SearchBar>} */}
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              placeholder="Search"
              onChange={(e) => setName(e.target.value)}
            />
            <button disabled={name? false : true}>🔍</button>
          </form>
        </div>
        <div>
        <Link to='/cart'>🛒</Link>
        { cart.length > 0 && cart.length }
        </div>        
        {isAuthenticated && <Link to='/admin'>Dashboard</Link>  }
        {isAuthenticated ? <LogoutButton/> : <LoginButton/> }
      </div>
    </div>
  );
};

export default NavBar;
