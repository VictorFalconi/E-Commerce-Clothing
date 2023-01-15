import axios from "axios";

// import { ALL_CLOTHES, CATEGORIES, CLOTHES_DETAIL, SEARCH_CLOTHES, CREATE_PRODUCT, ORDER_BY, CREATE_P_REVIEW, GET_REVIEWS, REVIEWS_FILTER, } from "./cases";

export function searchClothes(name) {
  return async function (dispatch) {
    try {
      const clothes = await axios(`http://localhost:9000/products?name=${name}`);
      dispatch({
        type: 'SEARCH_CLOTHES',
        payload: clothes.data,
      });
    } catch (error) {
      alert("not found");
    }
  };
}

export const allClothes = () => {
  return async function (dispatch) {
    try {
      const allClothes = await axios('http://localhost:9000/products')
      dispatch({
        type: 'ALL_CLOTHES',
        payload: allClothes.data
      })
    } catch (error) {
      alert("not found");
    }
  }
}

export const clothesDetail = (id) => {
  return async function (dispatch) {
    try {
      const clothesDetail = await axios(`http://localhost:9000/products/${id}`)
      dispatch({
        type: 'CLOTHES_DETAIL',
        payload: clothesDetail.data
      })
    } catch (error) {
      alert("not found");
    }
  }
}

export const categories = () => {
  return async function (dispatch) {
    try {
      const category = await axios('http://localhost:9000/category')
      dispatch({
        type: 'CATEGORIES',
        payload: category.data
      })
    } catch (error) {
      alert("not found");
    }
  }
}

export const createProduct = (product) => {
  return async function () {
    try {
      await axios.post('http://localhost:9000/products', product)
      .then((response) => {
        console.log(response,'respuesta del post')
      })
    } catch(error) {
      alert("cannot create product")
    }
  }
}

// ------  filtros -------

export function orderBy(payload) {
  return { type: 'ORDER_BY', payload }
}

export function filter(payload) {
  return { type: 'FILTER', payload }
}

// ---------- users ---------------
export const allUsers = () => {
  return async function (dispatch) {
    try {
      const allUsers = await axios('http://localhost:9000/user')
      dispatch({
        type: 'ALL_USERS',
        payload: allUsers.data
      })
    } catch (error) {
      console.log('Error action allUsers',error);
    }
  }
}

export const updateUserStatus = (id, payload) => {
  return async function (dispatch) {
    try {
      const update = await axios.put(`http://localhost:9000/user/${id}`, payload)
      const allUsers = await axios('http://localhost:9000/user')
      dispatch({
        type: 'UPDATE_USER_STATUS',
        payload: allUsers.data
      })
    } catch (error) {
      console.log('error en action/updateUserStatus', error);
    }
  }
}

//-----------------------Reviews-------------------------

export function createProductReview(payload){
  return async function(dispatch){
    try {
      let json = await axios.post('http://localhost:9000/reviews', payload)
      dispatch({
          type: 'CREATE_P_REVIEW',
          payload: json.data
      })
    } catch (error) {
      console.log('error en action createReviews', error)
    }
  }
}
export function reviewsFilter(payload) {
  return { type: 'REVIEWS_FILTER', payload: payload }
}
export function getPReviews() {
  return async function (dispatch) {
      const allData = await axios.get('http://localhost:9000/reviews')
      return dispatch({ type: 'GET_REVIEWS', payload: allData.data })
  }
}

//-----------------------cart-----------------------

export const addCart = (prod) => {
  return function (dispatch) {
    try {
      dispatch({
        type: 'ADD_CART',
        payload: prod
      })
    } catch (error) {
      console.log("error en addCart action", error);
    }
  }
}

export const cloudinaryImage = (imagen) => {
  return function (dispatch) {
    try {
      dispatch({
        type: 'CLOUDINARY_IMAGE',
        payload: imagen
      })
    } catch (error) {
      console.log("error en addCart action", error);
    }
  }
}
export const removeCartProduct = (prod) => {
  return function (dispatch) {
    try {
      dispatch({
        type: 'REMOVE_CART_PRODUCT',
        payload: prod
      })
    } catch (error) {
      console.log("error en remove cart action", error);
    }
  }
}
<<<<<<< HEAD

export const checkout = () => {
  return async function (dispatch) {
    try {
      const compra = await axios('http://localhost:9000/generar')
      dispatch({
        type: 'CHECKOUT',
        payload: compra.data
      })
    } catch (error) {
      console.log('error en action/checkOut', error);
    }
  }
}
=======
>>>>>>> main
