import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderBy, filter, filterFav } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import styles from "./Filters.module.css";
import { useAuth0 } from "@auth0/auth0-react";

export default function Filter() {
  const dispatch = useDispatch();
  const location = useLocation();
  const azOrder = useSelector((state) => state.azOrder);
  const catFilter = useSelector((state) => state.catFilter);
  const sizeFilter = useSelector((state) => state.sizeFilter);
  const brandFilter = useSelector((state) => state.brandFilter);
  const allClothes = useSelector((state) => state.allClothes);
  const favFilter = useSelector((state) => state.favFilter);
  const { user } = useAuth0();

  // const handleSelect = (e) => {
  //     var order = e.target.value
  //     dispatch(orderBy(order))
  //     //order(e.target.value) = (order) => dispatch(orderBy(order)); ;
  // }

  useEffect(() => {
    dispatch(orderBy(azOrder));
    dispatch(filter(catFilter));
    dispatch(filter(sizeFilter));
    dispatch(filter(brandFilter));
    dispatch(filterFav(favFilter));
  }, [azOrder, catFilter, sizeFilter, brandFilter, allClothes, favFilter.value]);

  //console.log("esto es de filtros " + productos?.name)

  return (
    <>
      <div className={styles.side} id="light">
        <div>
          {location.pathname === "/" ? (
            <div className={styles.sideBarHeader}>
              <div>
                <label>Order</label>
                <select
                  value={azOrder}
                  className={styles.buttonFilter}
                  onChange={(e) => {
                    dispatch({ type: "azOrder", payload: e.target.value });
                  }}
                >
                  <option default value="" >
                    Default
                  </option>
                  <option style={{ fontFamily: "Raleway" }} value="AZ">
                    Name A to Z
                  </option>
                  <option style={{ fontFamily: "Raleway" }} value="ZA">
                    Name Z to A
                  </option>
                  <option style={{ fontFamily: "Raleway" }} value="HL">
                    Price high to low
                  </option>
                  <option style={{ fontFamily: "Raleway" }} value="LH">
                    Price low to high
                  </option>
                </select>
              </div>

              <div>
                <label>Brand: </label>
                <select
                  value={brandFilter}
                  className={styles.buttonFilter}
                  onChange={(e) => {
                    dispatch({ type: "brandFilter", payload: e.target.value });
                  }}
                >
                  <option default value="">
                    All
                  </option>
                  <option value="Adidas">Adidas</option>
                  <option value="Gucci">Gucci</option>
                  <option value="Nike">Nike</option>
                  <option value="Tommy">Tommy Hilfiger</option>
                </select>
              </div>

              <div>
                <label>Category: </label>
                <select
                  value={catFilter}
                  className={styles.buttonFilter}
                  onChange={(e) => {
                    dispatch({ type: "catFilter", payload: e.target.value });
                  }}
                >
                  <option default value="">
                    All
                  </option>
                  <option value="T-shirts">T-shirts</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Shorts">Shorts</option>
                  <option value="Caps">Caps</option>
                </select>
              </div>

              <div>
                <label>Size: </label>
                <select
                  value={sizeFilter}
                  className={styles.buttonFilter}
                  onChange={(e) => {
                    dispatch({ type: "sizeFilter", payload: e.target.value });
                  }}
                >
                  <option default value="">
                    All
                  </option>
                  <option value="8">8 US</option>
                  <option value="8.5">8.5 US</option>
                  <option value="9">9 US</option>
                  <option value="9.5">9.5 US</option>
                  <option value="10">10 US</option>
                  <option value="10.5">10.5 US</option>
                  <option value="L">L</option>
                  <option value="S">S</option>
                  <option value="M">M</option>
                </select>
              </div>

              <div>
                <label>Favorites: </label>
                <select
                  value={favFilter.value}
                  className={styles.buttonFilter}
                  onChange={(e) => {
                    dispatch({ type: "favFilter", payload: {value: e.target.value, email: user?.email || 'invitado'}});
                  }}
                >
                  <option default value="">
                    All products
                  </option>
                  <option value="Favorites">Only favorites</option>
                </select>
              </div>

              <div>
                <button
                  onClick={() => {
                    dispatch({ type: "azOrder", payload: "" });
                    dispatch({ type: "sizeFilter", payload: "" });
                    dispatch({ type: "catFilter", payload: "" });
                    dispatch({ type: "brandFilter", payload: "" });
                    dispatch({ type: "favFilter", payload: {value: '', email: 'invitado'} });
                  }}
                  className={styles.buttonFilterReset}
                >
                  Reset filters
                </button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>

    //     <div>
    //         <select onChange={handleSelect} name="" id="">
    //             <optgroup label="Alphabetic">
    //                 <option value="A-Z">A - Z</option>
    //                 <option value="Z-A">Z - A</option>
    //             </optgroup>
    //         </select>

    //         <select onChange={handleSelect} name="" id="">
    //             <optgroup label="Generos">
    //                 <option value="M">Male</option>
    //                 <option value="F">Female</option>
    //                 <option value="U">Unisex</option>
    //             </optgroup>
    //         </select>

    //         <select onChange={handleSelect} name="" id="">
    //             <optgroup label="Marcas">
    //                 <option value="Gucci">Gucci</option>
    //                 <option value="Nike">Nike</option>
    //                 <option value="Adidas">Adidas</option>
    //             </optgroup>
    //         </select>

    //         <select onChange={handleSelect} name="" id="">
    //             <optgroup label="Categorias">
    //                 <option value="Caps">Caps</option>
    //                 <option value="T-shirts">t-shirt</option>
    //             </optgroup>
    //         </select>
    //     </div>

    //
  );
}
