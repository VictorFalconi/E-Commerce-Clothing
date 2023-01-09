import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchBar from "../Search Bar/SearchBar";

const NavBar = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className={styles.navbar}>
        <button className={styles.button} onClick={handleClick}></button>
        <SearchBar></SearchBar>
        <Link to="/newProduct">New Product</Link>
        <Link to="/">Log In</Link>
      </div>
    </div>
  );
};

export default NavBar;
