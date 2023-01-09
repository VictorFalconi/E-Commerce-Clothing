import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Search Bar/SearchBar";
import logo from "./assets/iconHome.jpeg"
import logoProfile from "./assets/logoProfile.png"
import formulario from "./assets/formulario.png"


const NavBar = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className={styles.navbar}>
        <img src={logo}  onClick={handleClick}></img>
        {path !== '/' ? null : <SearchBar></SearchBar>}
        <Link to="/newProduct">
        <img src={formulario} className={styles.IconFormulario} />
        </Link>
        <Link to="/"> 
        <img src={logoProfile} className={styles.IconProfile} />
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
