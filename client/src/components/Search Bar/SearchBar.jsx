import styles from "./SearchBar.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import lupa from "./assets/lupa_negra.png";
import { searchClothes } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const dispatch = useDispatch();
  let { name } = useParams();
  const searchClothesbyName = useSelector((state) => state.seartchClothes);
    console.log(searchClothesbyName)

  useEffect(() => {
    dispatch(searchClothes(name));
  }, [name]);

  return (
    <div className={styles.productFilter}>
      {searchClothesbyName.map((e) => (
        <div key={e._id} className={styles.cardFilter} >
          <h2>{e.name}</h2>
          <Link to={`/` + e._id}>
            <img src={e.image} alt="clothes" className={styles.image} />
          </Link>
        </div>
      ))}
    </div>
  );
}
