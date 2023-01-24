import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  addCart,
  clothesDetail,
  allUsers,
  getPReviews,
  getopenDetail,
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
  const cart = useSelector((state)=> state.cart)
  const [promedReviews, setPromedReviews] = useState(0);
  const [countReviews, setCountReviews] = useState(0);
  const [ talleCondicional, setTalleCondicional ] = useState();
  const [ cantidad, setCantidad] = useState(1)
  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/cardReviews";
    navigate(path);
  };
  useEffect(() => {
    dispatch(getopenDetail(param?.id));
    if (reviews.length === 0) {
      dispatch(getPReviews());
    }
    let reviewsPId = reviews.filter((e) => e.productId === product._id);
    // console.log('reviewsPId***//////////------------++++++++++++', reviewsPId)

    if (reviewsPId.length !== 0) {
      // console.log('products reviews---------------/////////////////', product.reviews)
      let count = reviewsPId.length;
      let sumaReviews = 0;
      reviewsPId.map((r) => {
        sumaReviews += r.score;
      });
      let promedioReviews = sumaReviews / count;
      setPromedReviews(promedioReviews);
      setCountReviews(count);
    }
    dispatch(allUsers());
    dispatch(clothesDetail(param?.id));
  }, []);

  const handleCart = (clothes) => {
    const find = cart?.find(p => p._id === clothes._id)
    if (find) {
      alert('El producto ya existe en el carrito')
    } else {
       clothes.stock[talleCondicional] -= cantidad;
      dispatch(addCart({ ...clothes, quantity: cantidad}));      
    }
    
  };
  function handleCant(e) {
    setCantidad(parseInt(e.target.value));
  };
  function handleSelect(e) {
    setTalleCondicional(e.target.value);
  }


  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>{clothes?.name}</h2>
        <div className={styles.cardimg}>
          {clothes?.image?.map((e, i) => (
            <div key={i} className={styles.imgContainer}>
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
          Sizes: {clothes?.stock? <select title='select' onChange={e=> handleSelect(e)}>
            <option defaultValue value={8}>Select</option>
            {
              Object.getOwnPropertyNames(clothes?.stock).map(d => {
                return (
                  <option key={d} value={d}>{d}</option>
                )
              })
            }
          </select> : '' }                 
        </p>     
        <div className={styles.talla}>
          {talleCondicional? <input name='qty' placeholder="ingrese cantidad" onChange={e => handleCant(e)} value={cantidad} type='number' min={1} max={talleCondicional? clothes?.stock[talleCondicional] : 'Seleccione Talle '} />: 'Seleccione Talle' }
           <p>{talleCondicional? clothes?.stock[talleCondicional] : ''}</p>
        </div>
        <div className={styles.reviews}>
          <h4>Reviews</h4>
          <div>
            <div className={styles.starContainer}>
              {[...Array(5)].map((rating, i) => {
                return promedReviews > i ? (
                  <img src={StarIconFill} key={i} className={styles.staricon} />
                ) : (
                  <img src={StarIcon} key={i} className={styles.staricon} />
                );
              })}
              <button type="button" onClick={routeChange}>
                {countReviews} reviews
              </button>
            </div>
            
          </div>
        </div>       
        <button disabled= {talleCondicional ? cantidad > clothes?.stock[talleCondicional]: true} className={styles.button} onClick={() => handleCart(clothes)}>
         Add to cart
        </button>
        {/* MENSAJE : NO SE DONDE COLOCAR LA PARTE DEL EDID
        <ClothingEdit></ClothingEdit> */}
      </div>
    </div>
  );
}

export default ClothingDetail;



/* <button className={styles.btn} onClick={() => addToCart(clothes)}>Add to bag</button> */
