import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addCart, clothesDetail } from "../../redux/actions";
import Cart from "../Cart/Cart.jsx";

import styles from "./ClothingDetail.module.css";

const ClothingDetail = () => {
  const dispatch = useDispatch();

  const param = useParams();
  const clothes = useSelector((state) => state.clothesDetail);

  useEffect(() => {
    dispatch(clothesDetail(param?.id));
  }, []);

  //console.log(clothes)

  const handleCart = (clothes) => {
    dispatch(addCart(clothes));
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2>{clothes?.name}</h2>
        <div>
          {clothes?.image?.map((e, i) => (
            <div key={e.public_id}>
              {e.secure_url ? (
                <img
                  src={e.secure_url}
                  style={{ width: "170px", height: "170px" }}
                ></img>
              ) : (
                <img
                  src={e}
                  style={{ width: "170px", height: "170px" }}
                ></img>
              )}
            </div>
          ))}
        </div>
        <p className={styles.price}>${clothes?.price}</p>
        <p>Season: {clothes?.season}</p>
        <h3>{clothes?.brand}</h3>
        <p>Model: {clothes?.model}</p>
        <p>Sizes:</p>
        <p>{clothes?.sizes?.map((e) => e).join(", ")}</p>

        <button className={styles.btn} onClick={() => handleCart(clothes)}>
          Agregar a la bolsa
        </button>
      </div>
    </div>
  );
};

export default ClothingDetail;

//LINEA 32 DEBE SER EL CAUSANTE DEL ERROR

/* <button className={styles.btn} onClick={() => addToCart(clothes)}>Add to bag</button> */
