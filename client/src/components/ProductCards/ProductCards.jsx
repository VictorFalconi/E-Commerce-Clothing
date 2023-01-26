// import React from "react";
// import { Link } from "react-router-dom";
// import styles from "./ProductCards.module.css";

// const ProductCards = ({ products }) => {
//   console.log(products)
//   return (
//     <div className={styles.containercards}>
//       {products?.map((p, i) => {
//         return (
//           <div key={i} className={styles.card}>
//             <div className={styles.circle}>
  
//               {typeof p.image[0] !== "string" ? (
//                 <div>
//                   {p.image.map((e) => (
//                     <img
//                       className={styles.logo}
//                       key={e.public_id}
//                       src={e.secure_url}
//                     ></img>
//                   ))}
//                 </div>
//               ) : (
//                 <div>
//                   {p.image.map((e, i) => (
//                     <img className={styles.logo} key={i} src={e}></img>
//                   ))}
//                 </div>
//               )}
//             </div>

//             <div className={styles.content}>
//               <h2>{p.name}</h2>
//               <p>Category: {p.category}</p>
//               <p>Price: ${p.price}</p>
//               <p>
//                 {/* Sizes: {Object.keys(p.stock).join(", ")} */}
//               </p>
//             </div>

//             <Link to={`/` + p._id}>
//               {typeof p.image[0] !== "string" ? (
//                 <div>
//                   {p.image.map((e) => (
//                     <img
//                       className={styles.product_img}
//                       key={e.public_id}
//                       src={e.secure_url}
//                     ></img>
//                   ))}
//                 </div>
//               ) : (
//                 <div>
//                   {p.image.map((e, i) => (
//                     <img className={styles.product_img} key={i} src={e}></img>
//                   ))}
//                 </div>
//               )}
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default ProductCards;



import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCards2.module.css";
import whiteHeart from '../../icons/white_heart.png';
import redHeart from '../../icons/red_heart.png';
import { useAuth0 } from '@auth0/auth0-react'
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../../redux/actions";

const ProductCards = ({ products }) => {

  const { user } = useAuth0();
  const favorites = useSelector(state => state.favorites);
  const userFavorites = favorites[user?.email || 'invitado'] || [];
  const dispatch = useDispatch();

  return (
    <div className={styles.productContainer} style={{width: '100%'}}>
      {products.length !== 0 ?
      products?.map((p, i) => {
        return (
          <div
            key={i}
            className={styles.containerCard}
          >
            <img 
              src={userFavorites.includes(p._id) ? redHeart : whiteHeart} 
              style={{
                cursor: 'pointer',
                position: 'absolute', 
                right: '10px', 
                top: '10px',
              }}
              onClick={_ => {userFavorites.includes(p?._id) ? dispatch(removeFavorite(user?.email || 'invitado', p?._id)) : dispatch(addFavorite(user?.email || 'invitado', p?._id))}}
            />
            <Link className={styles.card} to={`/` + p?._id}>
              {typeof p?.image[0] !== "string" ? (
                <div>
                  {p?.image.map((e) => (
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
            <p style={{ margin: "0" }}>Sizes: {p.stock? Object.getOwnPropertyNames(p?.stock).map(d => {
                return (
                  <span key={d} value={d}>{d} </span>
                )
              }):''}</p>
          </div>
        );
      }) : <p>There is no products</p>}
    </div>
  );
};

export default ProductCards;