import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCards.module.css";

const ProductCards = ({ products }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "left",
        maxWidth: "1000px",
        gap: '2em',
      }}
    >
      {products?.map((p, i) => {
        return (
          <div
            key={i}
            className={styles.containerCard}
            style={{
              width: "200px",
              height: "300px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
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
            <p style={{ margin: "0" }}>Sizes: {p.sizes.join(", ")}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductCards;
