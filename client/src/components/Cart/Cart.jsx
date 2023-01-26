import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkout, getUsersDetails, removeCartProduct } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Cart.module.css";
import ClothingDetail from "../ClothingDetail/ClothingDetail";
import { Link, useNavigate } from "react-router-dom";
import { style } from "@mui/system";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createUs} from '../../redux/actions.js'

function Cart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useAuth0();
  //console.log(user)
  const users = useSelector((state) => state.users);
  //console.log(users)
  const cart = useSelector((state) => state.cart);
  const continueMP = useSelector((state) => state.redirectMP);

  // State to store the items in the cart
  // const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  // function addToCart(item) {
  //   setCart([...cart, item]);
  // }

  // Function to remove an item from the cart
  function removeFromCart(item) {
    dispatch(removeCartProduct(item));
  }

  // Function to calculate the total of the cart
  function calculateTotal() {
    let total = 0;
    cart.forEach(function (item) {
      total += item.price * item.quantity;
    });
    return total;
  }

  const verificacionActive = () => {
    const email = user.email;
    const check = users?.filter((u) => u.email === user.email);
    if (check[0]?.active === false) {
      return (
        <button onClick={() => alert("Usuario banneado")}>
          Confirmar compra
        </button>
      );
    } else {
      return (
        <button
          className={styles.confirmarcompra}
          disabled={cart.length === 0}
          onClick={() => {dispatch(checkout(check[0]._id, cart))
          dispatch(getUsersDetails(check[0].email))}}
        >
          confirm purchase
        </button>
      );
    }
  };
  useEffect(() => {
    user&&dispatch(createUs(user))
  }, [user])
  

  return (
    <div className={styles.cartContainer}>
      <h2>Cart</h2>
      <ul>
        {cart?.map((item) => (
          <li key={item.name} className={styles.item}>
            {item.name} - ${item.price} x {item.quantity} u
            <button 
              className={styles.remove}
              onClick={() => removeFromCart(item)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div className={styles.total}>
        <h3>Total: ${calculateTotal().toFixed(2)}</h3>
        <div>
          {user ? verificacionActive() : <p>Please Login to continue</p>}
        </div>
      </div>
      <div className={styles.redirec}>
        <FontAwesomeIcon
          className={styles.arrowiconright}
          icon={faArrowRight}
        ></FontAwesomeIcon>
        <div>
          {continueMP && (
            <a
              href={continueMP}
              target="_blank"
              rel="noreferrer"
              onClick={() => {
                dispatch({ type: "SET_REDIRECTMP", payload: null });
                window.close();
              }}
            >
              redirect to payment market
            </a>
          )}
        </div>
        <FontAwesomeIcon
          className={styles.arrowiconleft}
          icon={faArrowLeft}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Cart;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Cart = () => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     getCart();
//   }, []);

//   const addToCart = async (item) => {
//     try {
//       const { data } = await axios.post('http://localhost:3000/cart', item);
//       setCart(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const removeFromCart = async (item) => {
//     try {
//       const { data } = await axios.delete(`http://localhost:3000/cart/${item.name}`);
//       setCart(data);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const calculateTotal = () => {
//     let total = 0;
//     cart.forEach((item) => {
//       total += item.price;
//     });
//     return total;
//   };

//   return (
//     <div>
//       <h2>Cart</h2>
//       <ul>
//         {cart.map((item) => (
//           <li key={item.name}>
//             {item.name} - ${item.price}
//             <button onClick={() => removeFromCart(item)}>Remove</button>
//           </li>
//         ))}
//       </ul>
//       <h3>Total: ${calculateTotal().toFixed(2)}</h3>
//     </div>
//   );
// };

// export default Cart;
