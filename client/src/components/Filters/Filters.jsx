// import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderBy, filter } from "../../redux/actions";
import { useLocation } from "react-router-dom";
import styles from "./Filters.module.css";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition } from "react-transition-group";
import { useRef, useEffect, useState } from "react";

function FilterNavbar(props) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navbarNav}>{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className={styles.navItem}>
      <a
        href="#"
        className={styles.iconButton}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <FontAwesomeIcon className={styles.icon} icon={faFilter}></FontAwesomeIcon>
      </a>
      {open && props.children}
    </li>
  );
}

function DropdownMenu() {
  const dispatch = useDispatch();
  const location = useLocation();
  const azOrder = useSelector((state) => state.azOrder);
  const catFilter = useSelector((state) => state.catFilter);
  const sizeFilter = useSelector((state) => state.sizeFilter);
  const brandFilter = useSelector((state) => state.brandFilter);
  const allClothes = useSelector((state) => state.allClothes);
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  // const handleSelect = (e) => {
  //     var order = e.target.value
  //     dispatch(orderBy(order))
  //     //order(e.target.value) = (order) => dispatch(orderBy(order)); ;
  // }

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
    dispatch(orderBy(azOrder));
    dispatch(filter(catFilter));
    dispatch(filter(sizeFilter));
    dispatch(filter(brandFilter));
  }, [azOrder, catFilter, sizeFilter, brandFilter, allClothes]);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        className={styles.menuItem}
        href="#"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.children}
      </a>
    );
  }

  //console.log("esto es de filtros " + productos?.name)

  return (
    <div className={styles.dropdown} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}
        className={styles.menuPrimary}
      >
        <div className={styles.menu}>
          <DropdownItem goToMenu="order">Order</DropdownItem>
          <DropdownItem goToMenu="brand">Brand</DropdownItem>
          <DropdownItem goToMenu="category">Category</DropdownItem>
          <DropdownItem goToMenu="size">Size</DropdownItem>
          <DropdownItem goToMenu="reset">Reset</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "order"}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}
        // className={`${styles.menuSecondary}`}
        classNames='menuSecondary'
      >
        <div>
          {/* <label>Order: </label> */}
          <select
            value={azOrder}
            // className={styles.buttonFilter}
            onChange={(e) => {
              dispatch({ type: "azOrder", payload: e.target.value });
            }}
          >
            <option default value="">
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
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "brand"}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}
        className={styles.menuSecondary}
      >
        <div>
          <select
            value={brandFilter}
            // className={styles.buttonFilter}
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
      </CSSTransition>
      <CSSTransition
        in={activeMenu === "category"}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}
        className={styles.menuSecondary}
      >
        <div>
          <select
            value={catFilter}
            // className={styles.buttonFilter}
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
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "size"}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}
        className={styles.menuSecondary}
      >
        <select
          value={sizeFilter}
          // className={styles.buttonFilter}
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
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="L">L</option>
          <option value="S">S</option>
          <option value="M">M</option>
        </select>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === "reset"}
        timeout={500}
        unmountOnExit
        onEnter={calcHeight}
        className={styles.menuSecondary}
      >
        <button
          onClick={() => {
            dispatch({ type: "azOrder", payload: "" });
            dispatch({ type: "sizeFilter", payload: "" });
            dispatch({ type: "catFilter", payload: "" });
            dispatch({ type: "brandFilter", payload: "" });
          }}
          // className={styles.buttonFilter}
        >
          Reset filters
        </button>
      </CSSTransition>

      {/* <div className={styles.side} id="light">
        <div className={styles.sideBarHeader}>
          {location.pathname === "/" ? (
            <div>
              <label>Order: </label>
              <select
                value={azOrder}
                className={styles.buttonFilter}
                onChange={(e) => {
                  dispatch({ type: "azOrder", payload: e.target.value });
                }}
              >
                <option default value="">
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
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="L">L</option>
                <option value="S">S</option>
                <option value="M">M</option>
              </select>
              <button
                onClick={() => {
                  dispatch({ type: "azOrder", payload: "" });
                  dispatch({ type: "sizeFilter", payload: "" });
                  dispatch({ type: "catFilter", payload: "" });
                  dispatch({ type: "brandFilter", payload: "" });
                }}
                className={styles.buttonFilter}
              >
                Reset filters
              </button>
            </div>
          ) : null}
        </div>
      </div> */}
    </div>

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

export default function Filter() {
  return (
    <FilterNavbar>
      <NavItem>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </FilterNavbar>
  );
}
