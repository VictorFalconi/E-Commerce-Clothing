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

const ProductCards = ({ products }) => {

  return (
    <div className={styles.productContainer}>
      {products?.map((p, i) => {
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
            <p style={{ margin: "0" }}>Sizes: {p.stock? Object.getOwnPropertyNames(p?.stock).map(d => {
                return (
                  <span key={d} value={d}>{d}</span>
                )
              }):''}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;