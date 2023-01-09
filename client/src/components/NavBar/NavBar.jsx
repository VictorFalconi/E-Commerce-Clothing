import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Search Bar/SearchBar";
import logo from "./assets/iconHome.jpeg"
import logoProfile from "./assets/logoProfile.png"
const NavBar = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className={styles.navbar}>
        <img src={logo} classname={styles.Icon} onClick={handleClick}></img>
        {path !== '/' ? null : <SearchBar></SearchBar>}
        <Link to="/newProduct">New Product</Link>
        <Link to="/"> 
        <img src={logoProfile} className='logoProfile' />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
