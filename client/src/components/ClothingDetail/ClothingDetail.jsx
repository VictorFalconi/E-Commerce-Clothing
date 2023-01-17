import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  addCart,
  clothesDetail,
  allUsers,
  getPReviews,
} from "../../redux/actions";
import Cart from "../Cart/Cart.jsx";
import StarIcon from "../../icons/StarIcon.svg";
import StarIconFill from "../../icons/StarIconFill.svg";

import styles from "./ClothingDetail.module.css";
import ClothingEdit from "./ClothingEdit";

function ClothingDetail(product) {
  const dispatch = useDispatch();

  const param = useParams();
  const clothes = useSelector((state) => state.clothesDetail);
  const reviews = useSelector((state) => state.reviews);
  const [promedReviews, setPromedReviews] = useState(0);
  const [countReviews, setCountReviews] = useState(0);
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/cardReviews";
    navigate(path);
  };
  useEffect(() => {
    // if (reviews.length === 0) {
    //   dispatch(getPReviews());
    // }
    // let reviewsPId = reviews.filter((e) => e.productId === product.id);
    // // console.log('reviewsPId***//////////------------++++++++++++', reviewsPId)

    // if (reviewsPId.length !== 0) {
    //   // console.log('products reviews---------------/////////////////', product.reviews)
    //   let count = reviewsPId.length;
    //   let sumaReviews = 0;
    //   reviewsPId.map((r) => {
    //     sumaReviews += r.score;
    //   });
    //   let promedioReviews = sumaReviews / count;
    //   setPromedReviews(promedioReviews);
    //   setCountReviews(count);
    // }
    dispatch(allUsers());
    dispatch(clothesDetail(param?.id));
  }, []);

  //console.log(clothes)

  const handleCart = (clothes) => {
    dispatch(addCart(clothes));
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>{clothes?.name}</h2>
        <div className={styles.cardimg}>
          {clothes?.image?.map((e, i) => (
            <div key={e.public_id}>
              {e.secure_url ? (
                <img
                  className={styles.image}
                  src={e.secure_url}
                ></img>
              ) : (
                <img
                  className={styles.image}
                  src={e}
                ></img>
              )}
            </div>
          ))}
        </div>
        <p className={styles.price}>Price: ${clothes?.price}</p>
        <p className={styles.season}>Season: {clothes?.season}</p>
        <p className={styles.brand}>Clothes: {clothes?.brand}</p>
        <p className={styles.model}>Model: {clothes?.model}</p>
        <p className={styles.sizes}>
          Sizes: {clothes?.sizes?.map((e) => e).join(", ")}
        </p>
        <div className={styles.reviews}>
          <h4 className="sr-only">Reviews</h4>
          <div className="flex items-center">
            <div className="flex items-center">
              {[...Array(5)].map((rating, i) => {
                return promedReviews > i ? (
                  <img src={StarIconFill} key={i} className={styles.staricon} />
                ) : (
                  <img src={StarIcon} key={i} className={styles.staricon} />
                );
              })}
            </div>
            
          </div>
        </div>
        <button className={styles.button} onClick={() => handleCart(clothes)}>
          Add to cart
        </button>
        {/* MENSAJE : NO SE DONDE COLOCAR LA PARTE DEL EDID
        <ClothingEdit></ClothingEdit> */}
      </div>
    </div>
  );
}

export default ClothingDetail;

//LINEA 32 DEBE SER EL CAUSANTE DEL ERROR

/* <button className={styles.btn} onClick={() => addToCart(clothes)}>Add to bag</button> */
