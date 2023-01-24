import styles from "./SearchBar.module.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchClothes } from "../../redux/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function SearchBar() {
  const dispatch = useDispatch();
  let { name } = useParams();
  const products = useSelector((state) => state.seartchClothes);
    //console.log(searchClothesbyName)

  useEffect(() => {
      dispatch(searchClothes(name));
      dispatch({type: 'CLEAN_SEARCH_CLOTHES'})    
  }, [name]);

  return (
    <div className={styles.productContainer}>
      {products.length? products?.map((p, i) => {
        return (
          <div
            key={i}
            className={styles.containerCard}
          >
            <Link className={styles.card} to={`/` + p._id}>
              {typeof p.image[0] !== "string" ? (
                <div>
                  {p.image.map((e) => (
                    <img
                      className={styles.cardIMG}
                      key={e.public_id}
                      src={e.secure_url}
                      style={{ width: "200px", height: "200px" }}
                    ></img>
                  ))}
                </div>
              ) : (
                <div>
                  {p.image.map((e, i) => (
                    <img
                      className={styles.cardIMG}
                      key={i}
                      src={e}
                      style={{ width: "200px", height: "200px" }}
                    ></img>
                  ))}
                </div>
              )}
            </Link>
            <p style={{ margin: "0", fontWeight: "700", textAlign: "center" }}>
              {p.name}
            </p>
            <p style={{ margin: "0" }}>Category: {p.category}</p>
            <p style={{ margin: "0" }}>Price: ${p.price}</p>
            <p style={{ margin: "0" }}>Sizes: {Object.keys(p.stock).join(", ")}</p>
          </div>
        );
      }) : <h2>No encontrado</h2> }
      {}
    </div>
  );
}
