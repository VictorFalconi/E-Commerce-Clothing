import React, { useState } from 'react';

import ClothingDetail from '../ClothingDetail/ClothingDetail';

function Cart() {
  // State to store the items in the cart
  const [cart, setCart] = useState([]);

  // Function to add an item to the cart
  function addToCart(item) {
    setCart([...cart, item]);
  }

  // Function to remove an item from the cart
  function removeFromCart(item) {
    setCart(cart.filter(i => i !== item));
  }

  // Function to calculate the total of the cart
  function calculateTotal() {
    let total = 0;
    cart.forEach(function(item) {
      total += item.price;
    });
    return total;
  }

  return (
    <div>
        
        <ClothingDetail addToCart={addToCart} />
      <h2>Cart</h2>
      <ul>
        {cart.map(item => (
          <li key={item.name}>
            {item.name} - ${item.price}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${calculateTotal().toFixed(2)}</h3>
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
