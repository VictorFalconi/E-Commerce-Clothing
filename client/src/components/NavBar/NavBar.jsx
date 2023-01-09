import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Search Bar/SearchBar";

const NavBar = () => {
  const path = window.location.pathname;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className={styles.navbar}>
        <button onClick={handleClick}>Logo que redirige hacia la Home</button>
        {path !== '/' ? null : <SearchBar></SearchBar>}
        <Link to="/newProduct">New Product</Link>
        <Link to="/">Log In</Link>
      </div>
    </div>
  );
};

export default NavBar;
