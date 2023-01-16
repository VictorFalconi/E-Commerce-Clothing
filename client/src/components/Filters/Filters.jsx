import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderBy, filter } from '../../redux/actions'
import { useLocation } from 'react-router-dom';
import styles from './Filters.module.css'

export default function Filter() {
  const dispatch = useDispatch();
  const location = useLocation();
  const azOrder = useSelector(state => state.azOrder);
  const catFilter = useSelector(state => state.catFilter);
  const sizeFilter = useSelector(state => state.sizeFilter);

  // const handleSelect = (e) => {
  //     var order = e.target.value
  //     dispatch(orderBy(order))
  //     //order(e.target.value) = (order) => dispatch(orderBy(order)); ;
  // }

  useEffect(() => {
    dispatch(orderBy(azOrder));
    dispatch(filter(catFilter));
    dispatch(filter(sizeFilter));
  }, [azOrder, catFilter, sizeFilter]);

  //console.log("esto es de filtros " + productos?.name)

  return (
    <>

    <div className={styles.side} id="light">  
      <div className={styles.sideBarHeader}>
       
       
      {location.pathname === '/'
      ? <div>
        <select value={azOrder} className={styles.buttonFilter} onChange={(e) => {dispatch({type: 'azOrder', payload: e.target.value})}}>
          <option default value="">Default</option>
          <option  style={{ fontFamily: 'Raleway'}} value="asc">A - Z</option>
            <option  style={{ fontFamily: 'Raleway'}} value="desc">Z - A</option>
        </select>
        <select value={catFilter} className={styles.buttonFilter} onChange={(e) => {dispatch({type: 'catFilter', payload: e.target.value});}}>
          <option default value="">Default</option>
          <option value="T-shirts">T-shirts</option>
          <option value="Shoes">Shoes</option>
          <option value="Shorts">Shorts</option>
          <option value="Caps">Caps</option>
        </select>
        <select value={sizeFilter} className={styles.buttonFilter} onChange={(e) => {dispatch({type: 'sizeFilter', payload: e.target.value});}}>
          <option default value="">Default</option>
          <option value="L">L</option>
          <option value="S">S</option>
          <option value="M">M</option>
        </select>
        <button onClick={() => {
          dispatch({type: 'azOrder', payload: ''})
          dispatch({type: 'sizeFilter', payload: ''})
          dispatch({type: 'catFilter', payload: ''})
          }} className={styles.buttonFilter} >Reset filters</button>
      </div> : null}
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
  )
};

